import React, { useEffect, useState } from "react";
import {
  Breadcrumb,
  Button,
  Card,
  Col,
  DatePicker,
  Divider,
  Form,
  Input,
  Row,
} from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import Nav from "../../components/Nav";
import { Link, useLocation, useParams } from "react-router-dom";
import { Client } from "../../types/models";
import {
  createClient,
  getAddressByCEP,
  getClientDetails,
  putClient,
} from "../../actions/clients";
import { useAppDispatch, useAppSelector } from "../../reducers/hooks";
import {
  MaskCellphone,
  MaskCEP,
  MaskCPF,
  MaskRG,
  unMask,
} from "../../utils/masks";
import moment from "moment";

const Details = () => {
  const dispatch = useAppDispatch();
  const client = useAppSelector((state) => state.client?.clientDetails);
  const address = useAppSelector((state) => state.client?.address);

  const params = useParams();
  const location = useLocation();
  const pageState = location.state as { mode: "create" | "edit" };

  const [form, setForm] = useState<Client>({
    id: null,
    name: null,
    cpf: null,
    rg: null,
    bornAt: null,
    cellphone: null,
    address: [],
  });
  const [addressCallIndex, setAddressCallIndex] = useState<number | null>(null);

  const handleSubmit = () => {
    if (pageState.mode === "create") {
      dispatch(createClient(form));
    } else if (client?.id) {
      dispatch(putClient(client.id, form));
    }
  };

  const handleAddAddress = () => {
    setForm((prev) => ({
      ...prev,
      address: prev.address
        ? prev.address.concat({
            id: "",
            clientId: "",
            cep: null,
            localidade: null,
            bairro: null,
            logradouro: null,
            complemento: null,
          })
        : prev.address,
    }));
  };

  const handleDeleteAddress = (addressIndex: number) => {
    if (form.address) {
      const addressUpdated = form.address.filter(
        (addressItem, index) => index !== addressIndex
      );

      return setForm((prev) => ({ ...prev, address: addressUpdated }));
    }
  };

  const handleFormChange = (
    key: string,
    value: string | moment.Moment | null,
    addressIndex?: number
  ) => {
    if (Number.isInteger(addressIndex) && form.address) {
      const addressUpdated = form.address.map((addressItem, index) =>
        index === addressIndex ? { ...addressItem, [key]: value } : addressItem
      );

      return setForm((prev) => ({ ...prev, address: addressUpdated }));
    }

    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleCleanForm = () => {
    setForm({
      address: [],
      bornAt: null,
      cellphone: null,
      cpf: null,
      id: "",
      name: null,
      rg: null,
    });
  };

  const isFormCompleted = () => {
    if (
      !form.name ||
      !form.cpf ||
      !form.bornAt ||
      !form.rg ||
      !form.cellphone
    ) {
      return false;
    }

    if (form.address) {
      for (const address of form.address) {
        if (
          !address.cep ||
          !address.localidade ||
          !address.bairro ||
          !address.logradouro ||
          !address.complemento
        ) {
          return false;
        }
      }
    }

    return true;
  };

  const handleGetAddress = (cep: string, index: number) => {
    dispatch(getAddressByCEP(cep));
    setAddressCallIndex(index);
  };

  useEffect(() => {
    if (params.id && pageState.mode === "edit") {
      dispatch(getClientDetails(params.id));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageState]);

  useEffect(() => {
    if (client && pageState.mode === "edit") {
      setForm({ ...client, bornAt: moment(client.bornAt) });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [client]);

  useEffect(() => {
    if (address && form.address) {
      const addressUpdated = form.address.map((addressItem, index) =>
        index === addressCallIndex ? address : addressItem
      );

      setForm((prev) => ({ ...prev, address: addressUpdated }));
    }
    setAddressCallIndex(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [address]);

  return (
    <div className="details">
      <Nav />

      <section className="details__content">
        <Breadcrumb>
          <Breadcrumb.Item>
            <Link to="/clients">Listagem de clientes</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>Detalhes do cliente</Breadcrumb.Item>
        </Breadcrumb>

        <Form layout="vertical" className="details__content__form">
          <Form.Item label={"Nome"}>
            <Input
              value={form.name ?? ""}
              onChange={(event) => handleFormChange("name", event.target.value)}
            />
          </Form.Item>
          <Row gutter={12}>
            <Col sm={12}>
              <Form.Item label={"CPF"}>
                <Input
                  value={MaskCPF(form.cpf ?? "")}
                  onChange={(event) =>
                    event.target.value.length <= 14 &&
                    handleFormChange("cpf", unMask(event.target.value))
                  }
                />
              </Form.Item>
            </Col>
            <Col sm={12}>
              <Form.Item label={"RG"}>
                <Input
                  value={MaskRG(form.rg ?? "")}
                  onChange={(event) =>
                    event.target.value.length <= 19 &&
                    handleFormChange("rg", unMask(event.target.value))
                  }
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={12}>
            <Col sm={16}>
              <Form.Item label={"Data de nascimento"}>
                <DatePicker
                  style={{ width: "100%" }}
                  value={form.bornAt as moment.Moment}
                  onChange={(date) => handleFormChange("bornAt", date)}
                  format={"DD/MM/yyyy"}
                  showToday={false}
                />
              </Form.Item>
            </Col>
            <Col sm={8}>
              <Form.Item label={"Telefone"}>
                <Input
                  value={MaskCellphone(form.cellphone ?? "")}
                  onChange={(event) =>
                    event.target.value.length <= 16 &&
                    handleFormChange("cellphone", unMask(event.target.value))
                  }
                />
              </Form.Item>
            </Col>
          </Row>

          <Divider />

          {form.address?.map((addressProps, index) => (
            <Card
              key={index}
              title={"Endereço"}
              extra={
                <DeleteOutlined
                  onClick={() => handleDeleteAddress(index)}
                  className="details__content__form__address__delete"
                />
              }
              className="details__content__form__address"
            >
              <Row gutter={12}>
                <Col sm={8}>
                  <Form.Item label={"CEP"}>
                    <Input
                      value={MaskCEP(addressProps.cep ?? "")}
                      onChange={(event) => {
                        if (event.target.value.length <= 9) {
                          handleFormChange(
                            "cep",
                            unMask(event.target.value),
                            index
                          );
                          if (event.target.value.length >= 9) {
                            handleGetAddress(event.target.value, index);
                          }
                        }
                      }}
                    />
                  </Form.Item>
                </Col>
                <Col sm={16}>
                  <Form.Item label={"Cidade"}>
                    <Input
                      value={addressProps.localidade ?? ""}
                      onChange={(event) =>
                        handleFormChange(
                          "localidade",
                          event.target.value,
                          index
                        )
                      }
                    />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={12}>
                <Col sm={12}>
                  <Form.Item label={"Bairro"}>
                    <Input
                      value={addressProps.bairro ?? ""}
                      onChange={(event) =>
                        handleFormChange("bairro", event.target.value, index)
                      }
                    />
                  </Form.Item>
                </Col>
                <Col sm={12}>
                  <Form.Item label={"Logradouro"}>
                    <Input
                      value={addressProps.logradouro ?? ""}
                      onChange={(event) =>
                        handleFormChange(
                          "logradouro",
                          event.target.value,
                          index
                        )
                      }
                    />
                  </Form.Item>
                </Col>
              </Row>
              <Form.Item label={"Complemento"}>
                <Input
                  value={addressProps.complemento ?? ""}
                  onChange={(event) =>
                    handleFormChange("complemento", event.target.value, index)
                  }
                />
              </Form.Item>
            </Card>
          ))}

          <Row justify="end">
            <Button onClick={handleAddAddress}>Adicionar endereço</Button>
          </Row>

          <Divider />

          <Row justify="end" className="details__content__form__actions">
            <Button disabled={!isFormCompleted()} onClick={handleSubmit}>
              Enviar
            </Button>
            <Button onClick={handleCleanForm} danger>
              Limpar
            </Button>
          </Row>
        </Form>
      </section>
    </div>
  );
};

export default Details;

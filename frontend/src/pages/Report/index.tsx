import React, { useEffect } from "react";
import { Button, Row, Table } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import Nav from "../../components/Nav";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../reducers/hooks";
import { deleteClient, getClients } from "../../actions/clients";

const Report = () => {
  const clients = useAppSelector((store) => store.client.clientList);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleRedirectToCreate = () =>
    navigate("add", { state: { mode: "create" } });
  const handleRedirectToDetails = (id: string) =>
    navigate(id, { state: { mode: "edit" } });

  const handleDelete = (id: string) => {
    dispatch(deleteClient(id));
  };

  useEffect(() => {
    dispatch(getClients());
  }, [dispatch]);

  return (
    <div className="report">
      <Nav />

      <section className="report__content">
        <Row className="report__content__actions" justify="end">
          <Button
            onClick={handleRedirectToCreate}
            className="report__content__actions__create-client-button"
          >
            Adicionar cliente
          </Button>
        </Row>

        <Table
          columns={[
            {
              title: "Name",
              key: "name",
              dataIndex: "name",
            },
            {
              title: "Celular",
              key: "cellphone",
              dataIndex: "cellphone",
            },
            {
              title: "RG",
              key: "rg",
              dataIndex: "rg",
            },
            {
              title: "CPF",
              key: "cpf",
              dataIndex: "cpf",
            },
            {
              title: "Data de nascimento",
              key: "bornAt",
              dataIndex: "bornAt",
            },
            {
              title: "",
              key: "edit",
              align: "center",
              width: "5%",
              render: (_value, row) => (
                <EditOutlined
                  onClick={() => row.id && handleRedirectToDetails(row.id)}
                  className="report__content__table__edit"
                />
              ),
            },
            {
              title: "",
              key: "delete",
              align: "center",
              width: "5%",
              render: (_value, row) => (
                <DeleteOutlined
                  onClick={() => row.id && handleDelete(row.id)}
                  className="report__content__table__delete"
                />
              ),
            },
          ]}
          dataSource={clients}
          pagination={{ pageSize: 4 }}
          bordered
        />
      </section>
    </div>
  );
};

export default Report;

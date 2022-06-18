import React, { useEffect, useState } from "react";
import { Button, Modal, Row, Table } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import Nav from "../../components/Nav";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../reducers/hooks";
import { deleteClient, getClients } from "../../actions/clients";
import { MaskCellphone, MaskCPF, MaskRG } from "../../utils/masks";
import moment from "moment";
import translate from "../../utils/translate";

const Report = () => {
  const clients = useAppSelector((store) => store.client.clientList);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [deleteModal, setDeleteModal] = useState({ id: "", visible: false });

  const handleRedirectToCreate = () =>
    navigate("add", { state: { mode: "create" } });
  const handleRedirectToDetails = (id: string) =>
    navigate(id, { state: { mode: "edit" } });

  const handleDeleteModalConfirm = () => {
    dispatch(deleteClient(deleteModal.id));
    setDeleteModal({ id: "", visible: false });
  };

  const handleDeleteModalCancel = () => {
    setDeleteModal({ id: "", visible: false });
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
            {translate("PAGES.REPORT.ADD")}
          </Button>
        </Row>

        <Table
          columns={[
            {
              title: translate("PAGES.REPORT.FIELDS.NAME"),
              key: "name",
              dataIndex: "name",
            },
            {
              title: translate("PAGES.REPORT.FIELDS.CELLPHONE"),
              key: "cellphone",
              dataIndex: "cellphone",
              render: (value) => MaskCellphone(value),
            },
            {
              title: translate("PAGES.REPORT.FIELDS.RG"),
              key: "rg",
              dataIndex: "rg",
              render: (value) => MaskRG(value),
            },
            {
              title: translate("PAGES.REPORT.FIELDS.CPF"),
              key: "cpf",
              dataIndex: "cpf",
              render: (value) => MaskCPF(value),
            },
            {
              title: translate("PAGES.REPORT.FIELDS.BORNAT"),
              key: "bornAt",
              dataIndex: "bornAt",
              render: (value) => moment(value).format("DD/MM/YYYY").toString(),
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
                  onClick={() =>
                    row.id && setDeleteModal({ id: row.id, visible: true })
                  }
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

      <Modal
        title={translate("PAGES.REPORT.DELETE_MODAL_NAME")}
        visible={deleteModal.visible}
        onOk={handleDeleteModalConfirm}
        onCancel={handleDeleteModalCancel}
        okText={translate("SHARED.CONFIRM")}
        cancelText={translate("SHARED.CANCEL")}
      >
        <b>{translate("PAGES.REPORT.DELETE_MODAL_MESSAGE")}</b>
      </Modal>
    </div>
  );
};

export default Report;

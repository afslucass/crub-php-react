import React from "react";
import { Button, Row, Table } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import Nav from "../../components/Nav";
import { useNavigate } from "react-router-dom";

const Report = () => {
  const navigate = useNavigate();

  const handleRedirectToCreate = () => navigate("add");

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
              render: () => (
                <EditOutlined className="report__content__table__edit" />
              ),
            },
            {
              title: "",
              key: "delete",
              align: "center",
              width: "5%",
              render: () => (
                <DeleteOutlined className="report__content__table__delete" />
              ),
            },
          ]}
          dataSource={[
            {
              id: "id",
              name: "Lucas",
            },
            {
              name: "Ana",
            },
            {
              name: "Maria",
            },
            {
              name: "Maria",
            },
          ]}
          pagination={{ pageSize: 4 }}
          bordered
        />
      </section>
    </div>
  );
};

export default Report;

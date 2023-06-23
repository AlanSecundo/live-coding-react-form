import { Space, Table } from "antd";
import { useEffect, useMemo } from "react";
import { useListUsers } from "../../services/onboard/useListUser";
import { useDeleteUser } from "../../services/onboard/useDeleteUser";
import styles from './styles.module.css';

const UserScreen = () => {
  const { dataSource, isLoading, loadUsers } = useListUsers();
  const { deleteUserById, isLoading: loadingDelete } = useDeleteUser();

  useEffect(() => {
    loadUsers();
  }, []);

  const deleteItem = async (id) => {
    await deleteUserById(id);
    loadUsers();
  };

  const columns = useMemo(
    () => [
      {
        title: "Nome",
        dataIndex: "name",
        key: "name",
      },
      {
        title: "CPF",
        dataIndex: "nationalRegistration",
        key: "nationalRegistration",
      },
      {
        title: "Action",
        key: "action",
        render: (data) => (
          <Space size="middle">
            <a>Editar</a>
            <a onClick={() => deleteItem(data._id)}>Deletar</a>
          </Space>
        ),
      },
    ],
    []
  );

  return (
    <div className={styles.main}>
      <Table
        size="middle"
        loading={isLoading || loadingDelete}
        dataSource={dataSource}
        columns={columns}
      />
    </div>
  );
};

export default UserScreen;

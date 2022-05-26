import React, { FC, useEffect } from "react"
import { useSelector } from "react-redux";
import { useTypeSelector } from "../hooks/useTypesSelector";
import { useDispatch } from "react-redux";
import { fetchUsers } from "../action-creators/user";
import { bindActionCreators } from "redux";
import { useActions } from "../hooks/useActions";

const UserList: FC = () => {
    const { users, loading, error } = useTypeSelector(state => state.userReducer);

    // const dispatch = useDispatch();
    const { fetchUsers } = useActions();

    useEffect(() => {
        //    bindActionCreators(fetchUsers, dispatch)();
        fetchUsers();
    }, [])
    if (loading) {
        return <h1>Идет загрузка....</h1>
    }
    if (error) {
        return <h1>{error}</h1>
    }
    return (
        <div>
            {users.map(user =>
                <div key={user.id}>
                    {user.name}
                </div>
            )}

        </div>
    );
};
export default UserList;
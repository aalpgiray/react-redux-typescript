
export const UserActions = {
    getUsers: "GET_USERS",
    setUserName: "SET_USER_NAME"
}

export async function getUser(): Promise<any> {
    return new Promise(r => {
        r({
            type: UserActions.getUsers,
            payload: "Alp"
        })
    })
}
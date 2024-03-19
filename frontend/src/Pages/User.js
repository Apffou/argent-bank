import Account from "../Components/Account/Account";
import EditUsername from "../Components/EditUsername/EditUsername";


function User() {
    return (
        <body>
            <main class="main bg-dark">
                <EditUsername />
                <h2 class="sr-only">Accounts</h2>
                <Account
                    accountTitle="Argent Bank Checking (x8349)"
                    accountAmount="$2,082.79"
                    accountAmountDescr="Available Balance" >
                </Account>
                <Account
                    accountTitle="Argent Bank Savings (x6712)"
                    accountAmount="$10,928.42"
                    accountAmountDescr="Available Balance" >
                </Account>
                <Account
                    accountTitle="Argent Bank Credit Card (x8349)"
                    accountAmount="$184.30"
                    accountAmountDescr="Current Balance" >
                </Account>
            </main>
        </body>
    )
}
export default User;
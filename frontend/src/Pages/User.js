import Account from "../Components/Account/Account";


function User() {
    return (
        <body>
            <main class="main bg-dark">
                <div class="header">
                    <h1>Welcome back<br />Tony Jarvis!</h1>
                    <button class="edit-button">Edit Name</button>
                </div>
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
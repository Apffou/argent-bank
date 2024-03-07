
import Form from "../Components/Form/Form";


function SignIn() {
    return (
        <body>
            <main className="main bg-dark">
                <section className="sign-in-content">
                    <i className="fa fa-user-circle sign-in-icon"></i>
                    <h1>Sign In</h1>
                    <Form />
                </section>
            </main>
        </body>
    )
}
export default SignIn;
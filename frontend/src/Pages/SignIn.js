
import Form from "../Components/Form/Form";


function SignIn() {
    return (
        <div className="main-contain">
            <main className="main bg-dark">
                <section className="sign-in-content">
                    <i className="fa fa-user-circle sign-in-icon"></i>
                    <h1>Sign In</h1>
                    <Form />
                </section>
            </main>
        </div>
    )
}
export default SignIn;
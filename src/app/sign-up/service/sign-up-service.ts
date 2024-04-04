
async function createAccount(formData: any) {

    await new Promise((resolver) => setTimeout(resolver, 2000));
    console.log('createAccount: ', formData)
    return true
}

const signUpService = {
    createAccount,
}

export default signUpService
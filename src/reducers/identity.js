const identity = (state = {}, action) => {
    switch (action.type) {
        case 'GENERATE_MNEMONIC':
            return Object.assign({}, state, {
                seed: action.seed
            })
        case 'SET_KEYPAIR':
            return Object.assign({}, state, {
                seed: null,
                keys: {
                    public: action.publicKey,
                    private: action.privateKey
                }
            })

        default:
            return state
    }
}

export default identity


const accountManager = {
    accounts: [
      { email: 'hai@gmail.com', password: 'haitran' },
      { email: 'giang@gmail.com', password: 'tragiang' },
      { email: 'noah@gmail.com', password: 'ngocanh' },
    ],
    
    addAccount: (email, password, phone) => {
      const newAccount = { email, password, phone };
      accountManager.accounts.push(newAccount);
    },
  
    getAccounts: () => accountManager.accounts,
  };
  
  export default accountManager;
  
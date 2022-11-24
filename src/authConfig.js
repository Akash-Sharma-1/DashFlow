export const msalConfig = {
  auth: {
    clientId: "16c559c4-c678-4984-8821-00c514a056ee",
    authority:
      "https://login.microsoftonline.com/99dd3a11-4348-4468-9bdd-e5072b1dc1e6", // This is a URL (e.g. https://login.microsoftonline.com/{your tenant ID})
    redirectUri: "http://localhost:3000",
  },
  cache: {
    cacheLocation: "sessionStorage", // This configures where your cache will be stored
    storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
  },
};

// Add scopes here for ID token to be used at Microsoft identity platform endpoints.
export const loginRequest = {
  scopes: ["User.Read", "Mail.Read", "Calendars.Read", "Tasks.ReadWrite"],
};

// Add the endpoints here for Microsoft Graph API services you'd like to use.

export const graphConfig = {
  graphMeEndpoint: "https://graph.microsoft.com/v1.0/me",
  graphMailEndPoint: "https://graph.microsoft.com/v1.0/me/messages",
  graphCalendarEndPoint: `https://graph.microsoft.com/v1.0/me/calendarview?startdatetime=${new Date().toISOString()}&enddatetime=${new Date((new Date()).setDate((new Date()).getDate() + 7)).toISOString()}`,
  graphTodoEndPoint: "https://graph.microsoft.com/v1.0/me/todo/lists",
};

export const mwAPIs = {
  mwCodeSearchEndpoint: "https://codesearch.mathworks.com/search?template_id=1&searchText=",
}

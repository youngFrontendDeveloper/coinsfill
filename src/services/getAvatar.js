export const getAvatar = async() => {
  await fetch( "https://test-task.test211.workers.dev/account/image", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "token-tt": localStorage.getItem( "token" ),
    },
  } );
};
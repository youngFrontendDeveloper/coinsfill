export const getAvatar = async() => {
  const response = await fetch( "https://test-task.test211.workers.dev/account/image", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "token-tt": localStorage.getItem( "token" ),
    },
  } );
  const result = await response.json();

  return result;
};
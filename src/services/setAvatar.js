export const setAvatar = async(data) => {
  await fetch( "https://test-task.test211.workers.dev/account/image", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "token-tt": localStorage.getItem( "token" ),
    },
    body: JSON.stringify( { image: data } )
  } );
};
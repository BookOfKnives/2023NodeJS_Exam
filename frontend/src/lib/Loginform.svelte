<script>
    let username = "";
    let userpassword = "";

    
    async function loginFunction() {
        await fetch("http://127.0.0.1:8080/api/users", {
            method: "POST",
            headers: {'content-type':'application/json'},
            mode: 'cors',
            body: JSON.stringify({name: username, password: userpassword})
        });
        username = "";
        userpassword = "";
    }
    

</script>

    <p>Please login, user:</p>
    <input bind:value={username}>
    <input bind:value={userpassword}>
    <button on:click={loginFunction}> button!</button>

    <p>hello {username}</p>




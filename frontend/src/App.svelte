<script>
  import Loginform from "./lib/Loginform.svelte"
  import io from "socket.io-client";
  
  const socket = io("localhost:8081");

  let words = "";
  function handleWords() {
    socket.emit("event", {data: words });
  };

  socket.on("ready", () => {
      socket.emit("ready-response", {data: "this bike's ready from app svelte 009"});
    });

    function hitIO() {
      socket.emit("ready", {data: "this is hitIO in appsvel 009"})
    }
  

</script>

<main>
 
  <div class="login">
    <Loginform />
  </div>
</main>
  
<input bind:value={words}>
<button on:click={handleWords}>Send Words</button>
<p> Some text</p>
<div>  
  <button on:click={hitIO}>Do a ready</button>
</div>


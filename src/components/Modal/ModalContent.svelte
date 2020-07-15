<script>
  export let message;
  export let content;
  export let buttonText;
  export let buttonIcon;
  export let buttonOnClick;
</script>

<style type="text/scss">
  .content {
    margin: 25px auto 0;
    padding: 10px;
  }
  .message {
    font-size: 1rem;
    font-weight: normal;
    text-align: center;
    padding: 5px;
    color: #21578A;
  }
  button {
    background-color: #21578A;
    padding: 8px;
    cursor: pointer;
    border: 0;
  }
  button:hover {
    opacity: 0.8;
  }
  img {
    height: 15px;
    margin-right: 10px;
  }
</style>
<div>
<div class="content">{@html content}</div>
{#if message}
<div class="message">{message}</div>
{/if}
{#if buttonText}
  <button on:click={buttonOnClick}>
    {#if buttonIcon}
    <img src="/icons/{buttonIcon}.png" alt={buttonText} />
    {/if}
    {buttonText}</button>
{/if}
</div>

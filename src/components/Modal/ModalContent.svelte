<script>
  export let message;
  export let content;
  export let buttonText;
  export let buttonIcon;

</script>

<style type="text/scss">
  .content {
    margin: 0 auto;
  }
  .message {
		font-size: 1rem;
		text-align: center;
  }
  button {
    background-color: #21578A;
    padding: 5px;
  }
  img {
    height: 15px;
    margin-right: 10px;
  }
</style>

<div class="content">{@html content}</div>
<div class="message">{message}</div>
{#if buttonText}
  <button >
    {#if buttonIcon}
    <img src="/{buttonIcon}.png" alt={buttonText} />
    {/if}
    {buttonText}</button>
{/if}

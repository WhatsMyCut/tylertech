<script>
  export let message;
  export let buttonText;
  export let buttonIcon;

</script>

<style type="text/scss">
  @import '../../style/variables.scss';
  h2 {
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

<h2>{message}</h2>
{#if buttonText}
  <button ><img src="/{buttonIcon}.png" alt={buttonText} />{buttonText}</button>
{/if}

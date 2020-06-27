<style lang="scss">
  @import "../style/theme.scss";

	h1, figure {
		text-align: center;
		margin: 0 auto;
	}

	h1 {
		font-size: 2.8em;
		text-transform: uppercase;
		font-weight: 700;
		margin: 0 0 0.5em 0;
	}

	figure {
		margin: 0 0 1em 0;
	}

	img {
		width: 100%;
		max-width: 600px;
		margin: 0 0 1em 0;
	}

	@media (min-width: 480px) {
		h1 {
			font-size: 4em;
		}
	}
</style>

<svelte:head>
	<title>Tyler Tech Booth</title>
  <style lang=”scss” global>
    @import "./style/global.scss";
  </style>
</svelte:head>

<h1>Tyler Tech Booth</h1>

<figure>
	<figcaption>Have fun with Sapper!</figcaption>
	<img alt='Tyler Tech Booth' src='Booth_Template_Guide.png'>
</figure>

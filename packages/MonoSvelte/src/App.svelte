<script>
  import { uuid } from "mono-utils";

	let city = ""
	let town = ""
	$:location = "Location: " + city + " " + town
	const reset = () => {
		city = ""
		town = ""
    console.log(uuid(22));
	}
</script>

<main>
	<div>
		<label for="city">City</label>
		<input id="city" type="text" bind:value={city} />
		<label for="town">Town</label>
		<input id="town" type="text" bind:value={town} />
		<button on:click={reset}>Reset</button>
	</div>
	<div>
		{location}
	</div>
</main>

<style>
	main {
		background-color: white;
	}
</style>


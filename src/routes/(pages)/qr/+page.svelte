<script>
  import QrCode from "$lib/script/qrcode";
  let input_text = $state("Hello");

  let matrix = $derived(QrCode.generate(input_text));
  let uri = $derived(QrCode.render("svg-uri", matrix));
</script>

<input type="text" bind:value={input_text} />

<img style="max-width: 400px" src={uri} alt="QR code for {input_text}" />

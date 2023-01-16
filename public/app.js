async function obterResposta() {
  var texto = document.getElementById('entrada').value;
  const prompt = texto;
  const model = "text-davinci-002";

  const resposta = await fetch(
    `https://api.openai.com/v1/completions`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer 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`
      },
      body: JSON.stringify({
        prompt,
        model,
        max_tokens: 2048,
        n: 1,
        stop: ""
      })
    }
  );

  const dados = await resposta.json();
  // console.log(dados.choices[0].text);
  console.log(texto);
  document.getElementById('chatbot').innerHTML= dados.choices[0].text
}
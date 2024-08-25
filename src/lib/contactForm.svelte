<script lang="ts">
  let formStatus:string = '';

  async function handleSubmit(event: SubmitEvent) {
    var form = <HTMLFormElement>document.getElementById("contact-form")!;
    var target = event.target as HTMLFormElement
    var data = new FormData(target);

    fetch(target.action, {
      method: form.method,
      body: data,
      headers: {
          'Accept': 'application/json'
      }
    }).then(response => {
      if (response.ok) {
        formStatus = "Thanks for your submission!\nI will get back to you soon.";
        form.reset()
      } else {
        formStatus = "Oops! There was a problem submitting your form.";
      }
    }).catch(error => {
      formStatus = "Oops! There was a problem submitting your form.";
    });
  }
</script>

<form
  id="contact-form"
  action="https://formspree.io/f/xvgpbybr"
  method="post"
  class="flex flex-col w-96"
  on:submit|preventDefault={handleSubmit}
>
  <label for="name" class="text-slate-400 roboto-mono text-s">Name <span class="text-orange">*</span></label>
  <input type="text" name="name" required class="mt-1 py-1 px-2 rounded-md bg-gray-100" placeholder="First Last"/>

  <label for="email" class="mt-2 text-slate-400">Email <span class="text-orange">*</span></label>
  <input type="email" name="email" required class="mt-1 py-1 px-2 rounded-md bg-gray-100" placeholder="email@site.com"/>

  <label for="message" class="mt-2 text-slate-400">Message <span class="text-orange">*</span></label>
  <textarea name="message" rows="6" required class="mt-1 py-1 px-2 rounded-md bg-gray-100" placeholder="What would you like to talk about?" />

  <div class="mt-6 flex justify-center text-orange">
    {#if formStatus == null || formStatus == ''}
      <button id="submit-btn" class=" w-fit h-8 px-8 mx-auto rounded-2xl hover:bg-orange hover:text-secondary-blue uppercase roboto-mono font-bold border-orange border-2">Submit</button>
    {:else}
      <p id="contact-form-status" class="whitespace-pre-line text-center">{formStatus}</p>
    {/if}
  </div>
</form>
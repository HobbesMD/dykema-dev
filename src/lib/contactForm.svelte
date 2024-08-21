<form
  action="https://formspree.io/f/xvgpbybr"
  method="post"
  class="flex flex-col w-96"
>
  <label for="name" class="text-slate-400 roboto-mono text-s">Name <span class="text-orange">*</span></label>
  <input type="text" name="name" required class="mt-1 py-1 px-2 rounded-md bg-gray-100" placeholder="First Last"/>

  <label for="email" class="mt-2 text-slate-400">Email <span class="text-orange">*</span></label>
  <input type="email" name="email" required class="mt-1 py-1 px-2 rounded-md bg-gray-100" placeholder="email@site.com"/>

  <label for="message" class="mt-2 text-slate-400">Message <span class="text-orange">*</span></label>
  <textarea name="message" rows="6" required class="mt-1 py-1 px-2 rounded-md bg-gray-100" placeholder="What would you like to talk about?" />
</form>
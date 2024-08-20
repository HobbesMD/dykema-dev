<form
  action="https://formspree.io/f/xvgpbybr"
  method="post"
  class="flex flex-col w-96"
>
  <label for="name" class="text-slate-400 roboto-mono text-s">Name <span class="text-red-600">*</span></label>
  <input type="text" name="name" required class="mt-1 py-1 px-2 rounded-md" placeholder="First Last"/>

  <label for="email" class="mt-2 text-slate-400">Email <span class="text-red-600">*</span></label>
  <input type="email" name="email" required class="mt-1 py-1 px-2 rounded-md" placeholder="email@site.com"/>

  <label for="message" class="mt-2 text-slate-400">Message <span class="text-red-600">*</span></label>
  <textarea name="message" rows="6" required class="mt-1 py-1 px-2 rounded-md" placeholder="What's on your mind?" />
</form>
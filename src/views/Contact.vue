<template>
  <div class="main">
    <h3>Get in touch</h3>
    <div class="info-box">
      <p class="title">Korey Kube</p>
      <p class="additional">52a Vale Street</p>
      <p class="additional">St Kilda, VIC, 3182</p>
      <p class="additional"><span class="highlight">E: </span>koreykube@gmail.com</p>
      <p class="additional"><span class="highlight">P: </span>0401 956 300</p>
    </div>
    <div class="form-box">
      <form action="mailto:koreykube@gmail.com" method="post" enctype="text/plain">
        <input type="text" name="name" required placeholder="Name"><br/>
        <input type="email" name="email" required placeholder="you@yourdomin.com"><br/>
        <textarea type="textarea" rows="5" name="message" placeholder="Type your message here..."></textarea>
        <br/>
        <div class="action-buttons">
          <input type="submit" value="Send">
          <input type="reset" value="Clear">
        </div>
      </form>
    </div>
  </div>
</template>

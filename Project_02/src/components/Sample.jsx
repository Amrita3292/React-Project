import React from 'react'

function Sample() {
  return (
    <div>
          <figure class="md:flex bg-gray-100 rounded-xl p-8 md:p-0">
        <img class="w-32 h-32 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="https://images.pexels.com/photos/16204266/pexels-photo-16204266/free-photo-of-a-woman-in-white-pants-looking-at-flowers-in-a-greenhouse.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt="" width="384" height="512" />
  <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
    <blockquote>
      <p class="text-black font-semibold ">
        “Tailwind CSS is the only framework that I've seen scale
        on large teams. It’s easy to customize, adapts to any design,
        and the build size is tiny.”
      </p>
    </blockquote>
    <figcaption class="font-medium">
      <div class="text-cyan-600">
        Sarah Dayan
      </div>
      <div class="text-cyan-500">
        Staff Engineer, Algolia
      </div>
    </figcaption>
  </div>
</figure>
      
    </div>
  )
}

export default Sample

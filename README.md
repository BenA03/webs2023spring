# Project 3: Website Portfolio

For peer review, please reference the landing page webs2023spring/docs/index.html.

---

Your task in this unit is to **build a multi-page website using basic html and css files** — as opposed to a site manager like WordPress or Wix — **along with any media assets you wish to embed.** (Any JavaScript or animation you want to add for interactivity is welcome, but above and beyond expectations.) In assigning this, I have two main goals for you:

1. to learn how to manage a composite project made up of multiple interlinking files, and
2. to explore the affordances of the web design stack as a medium, and especially its ability to _flexibly render content for multiple audiences or reading priorities_.

As with the earlier projects, the selection of content is your choice. One relatively straightforward option for this unit is to stage and present the materials you produced earlier in the term! Depending on your needs and interests, however, you can also develop this into a more sustainable and public-facing platform from which to manage your online identities, or a mock-up of demo content you can use to show off your web-design skills. Whatever you choose, you should _consider your audience(s) and how they might land on your website, and where you therefore wish to direct their attention and next steps._

As you start planning your composition, consider: What have you been working on, in or out of this class, that you'd like to show the world? What have you made, or done, or pursued? If someone were to search for you without using your name, what terms would they use in the search? What images would represent or resonate with your answers so far? Or: if the site won't focus on _you_, what group, or thing, or event would you prefer to represent, and in how many ways could you tag or subdivide _that_?

See if any terms or images come to mind when you think of your subject, then work back and forth from image to word and back.

## Generative constraints
<!-- _This is last year's starting point; we'll discuss and update in class when you've produced a preview, as has been our usual process._ -->
_To be updated after [lesson 19](https://benmiller314.github.io/cdm2023spring/plans/lesson-19)_

**Baseline criteria**
For a minimum grade of B, all projects for this unit must:

<ul><li>Use arrangement, size, color, visual rhythm, and/or contrast to focus viewers' attention.</li>
<li>Include at least 2-3 navigable html locations (multiple pages, or multiple scrolling locations on the same page)</li>
<li>Have a clear mode of navigation among the pages (no dead ends)</li>
<li>Include a sitewide css stylesheet (i.e. an organized visual theme)</li>
<li>Include at least one legally useable image, with alt text</li>
<li>Credit all assets correctly, including attribution (creator names) where required</li>
<li>Successfully display locally in a web browser</li>
<li>For all of the above, argue in the reflection why you did what you did – or what you would do if you had more time</li>
<li>Use meaningful commit messages that say what’s changing (or even why)</li>
</ul>


**Aspirational inspirations**
To target (but not guarantee) a grade above a B, the best projects for this unit may...

* Media Files
  -	Include playable media: <code>&lt;audio&gt;</code>,  <code>&lt;video&gt;</code>, <code>&lt;iframe&gt;</code>
  -	Use many images, laid out in a clear pattern (e.g. grid, alternating left/right)
  -	Optimize image filetypes, resolutions, and file sizes for faster loading
  -	Make or modify your own multimedia content (e.g. graphics, audio, video)
  - Have a system to display other sorts of media files from the browser (docs, pdfs, etc)

* Dynamism
  -	Use responsive design (e.g. <code>@media</code> queries, <code>flex-wrap</code>, <code>auto-fill</code>, etc) to dynamically resize elements based on viewport width
  -	Animate HTML elements via JavaScript (e.g. image carousel) or CSS (e.g. :hover / :focus events)
  -	Add interactivity via JavaScript (e.g. on-click events)
  -	Include a loadable alternate stylesheet / theme (e.g. dark mode, high-contrast) if you can explain why it’s helpful in your reflection (e.g. does it make the site more accessible? Is it a print stylesheet?)

* Coding
  - Use Flexbox or Grid (or Float) layouts
  -	Use advanced navigation, e.g. drop-down menu, tabs, or sticky nav bar
  -	Condense your CSS stylesheet to the best of your ability
  -	Use Jekyll (built into GitHub Pages; see [Resources page](https://benmiller314.github.io/cdm2022spring/resources#web-frameworks)) to minimize repetition in your HTML through templates and variables
  -	Use a web framework to build your website (angular, react, etc. but also bootstrap, skeleton, etc, depending on your level)
  -	Use JavaScript for anything at all
  - Add comments, whitespace, and other formatting to code to make it more readable

* Audience Engagement
  -	Use best practices for accessible design (see [W3's Four Principles](https://www.w3.org/TR/UNDERSTANDING-WCAG20/intro.html#introduction-fourprincs-head) and the [WAVE web accessibility evaluation tool](http://wave.webaim.org))
  - Design for mobile devices (e.g. with <code>@media</code>)
  -	Load site publicly over the internet (e.g. with GitHub Pages)
  -	Have a clear, consistent theme for your website’s content
  - Apply visual unit knowledge about fonts and how they convey which message or how certain fonts pair together

* Reflection
  -	Make a clear argument in your reflection as to why you met enough of the aspirational criteria to be stretching the abilities you came in with
  - Justify the website's structure for its intended purpose / audience
  - (For all of the above, explain in the reflection why you did what you did – or what you would do if you had more time)



## Deadlines and products
At each stage, unless otherwise specified, upload (push) your materials to your own copy of this assignment repository. I recommend that you **save often, using meaningful commit messages**; for best results, please keep your filenames clear, lowercase, and space-free (use hyphens or underscores).

If you are using Box, please nevertheless share a link to your Box folder prominently in your GitHub repository.

| date | what's due | expected files |
|----|----|----|
| Thurs March 2 | Website Portfolio Proposal | Thinking in writing about what you'd like to do for this assignment.<ul><li>Post to the appropriate <a href="https://github.com/benmiller314/cdm2023spring/issues/">Issue queue</a> with your <strong>proposal</strong>, suggesting in prose the idea or appeal you're hoping to make. (And if you're stuck, see the <a href="#parachute-prompts">"parachute prompts"</a> below.)</li><li>NEW: Please include at least one photo of a design sketch, e.g. something hand-drawn to show possible layout.</li><li>In the same post, your readme, or a separate assets.md file, include a <strong>prospective assets chart</strong> (see <em>Writer/Designer</em> p. 149) naming what pages, page sections, and images you think you'll need.</li><li>Please also **link** to your repository in your post.</li></ul> |
| Tues March 21 | Website Portfolio Preview 1: Content and Navigation | An early snapshot of your progress, to get the gears turning. Turn in: <ul><li>A multifile <strong>project folder</strong> – probably named "docs," for ease of use with GitHub Pages – containing a combination of html and css, even if it's not well-developed.</li><li> A static <strong><a href="https://www.take-a-screenshot.org/">screenshot</a> (.png or .jpg)</strong> of your website-in-progress, as rendered in a local web browser (for comparison later to subsequent drafts). <ul><li>(Ideally, take a screenshot of your text editor setup, too, with the navigation pane showing: this can sometimes help me give feedback more quickly.)</li></ul></li><li> A plain text (.txt) or markdown (.md) file, explaining in at least 300 words <strong>what you're showing us</strong> in this preview. Feel free also to ask questions or lay out next steps for yourself!</li><li> An updated list of <strong>assets</strong>, now with any files or fonts you've actually obtained. As you go, add source documentation for any outside sources – and your permission to use them (e.g. licenses, fair use; see <em>Writer/Designer</em> p. 160-165).</li></ul> |
| Thurs March 23 | Second Preview: Layout | An early attempt at laying out the content you had for Tuesday, so you're not heading into the workshop entirely un-styled. This is still open to radical change. Turn in: <ul><li>Another push of your project folder.</li><li>Another screenshot of your website and/or your workspace, showing what's new.</li><li><em>Optionally</em> a description of what you were going for in the layout, and/or what you're hoping for help with. I know it's just two days since last time, so no worries if you don't have time for this.</li></ul> |
| Tues March 28 | Website Portfolio Draft | A solid attempt at a complete website. Turn in:<ul><li>A multifile <strong>project folder</strong>, containing a combination of html and css files</li><li>At least one more static <strong><a href="https://www.take-a-screenshot.org/">screenshot</a> (.png or .jpg)</strong> of your web pages and source code in progress. <ul><li>Think about what moments are worth remembering as you go: where did you level up, or realize something, or get stuck?</li></ul></li><li>An <strong>updated README.md file</strong>, introducing the Website source code to a new audience.</li><li>An <strong>updated ASSETS.md file</strong> – or update within README.md – including documentation of any outside sources, and your permission to use them (e.g. licenses, fair use); see <em>Writer/Designer</em> p. 160-165.</li></ul>  |
| <span title="so you get some sleep and time to really reflect">Thurs</span> Apr 5, 11:59 pm (target) | Website Portfolio Final Draft | One last studio day, then try to finish up your website and reflection by Thursday. Include all the same components as in the earlier draft, but updated. |
| <strong>Fri</strong> Apr 7 | Website Portfolio Reflection | Give a sense of the work you put into your website project and whether it accomplishes what you wanted it to. Turn in: <ul><li>at least 500 words describing the work you did</li><li>at least two screenshots showing your work in progress</li><li>at least one photograph of a notecard with feedback that you responded to in revising (and please say how)</li><li>your own assessment of how you met the baseline criteria for the class, as well as aspirational criteria as appropriate </li></ul> <strong>Post your reflections to the course site's <a href="https://github.com/benmiller314/cdm2022spring/issues/">Issue queue</a></strong>, to make it easier to embed images. (If you want to then copy the source code into a file in your repo called reflections.md, I won't stop you!) |


<aside>
<h2>A Note About Folders</h2>

If you look around in the default repo, you'll see that there are already a few subfolders created. These correspond to the folders that you'll be asked to make in the html/css tutorial I'm assigning for homework, and are my suggested way of organizing your space as you make your way through the exercises there.

Note, though, that you will have to create at least one more folder even in the first homework (for the fourth tutorial, "Hello, CSS"). And, presumably, many more (the tutorial has 14 chapters, though maybe not all of you will get that far). You can create these new folders directlly in VS Code by right-clicking in the sidebar where the other folders already exist. (Other text editors probably have similar affordances.)
</aside>



## Parachute Prompts

If you find yourself coming up on proposal day and you're not sure what to propose, try one of these:

1. _Showcase your classwork_. Make a landing page that links to a second page containing your soundscape narrative and a third page containing your rhetorical collage. Work with semantic html to make the media files directly accessible to site visitors (i.e. they shouldn't need to download them). As an extension, you might want to showcase work you've produced for other courses, in which case I encourage you to look for (and write about) a learning trajectory or set of insights that tie your courses together.

2. _Site redesign_. Choose an existing website that you think is kinda boring, or busy, or otherwise in need of a fresh start.<sup>a</sup> After thinking about why someone would be coming to the site, and what they might want to do once there, build a mock-up of a new design that better meets those needs and goals. NB: I say "mock-up" advisedly: many live sites on the open web can be fiendishly complicated. While it's a good idea to "View Page Source" to look at the underlying html, you may prefer to create your own simplified version from scratch, with just the major block elements you'll use for layout and navigation, and write your stylesheet just for that.
   - <sup>a</sup> Two sites I'm involved with that I know I'd like to redesign, but just haven't had time, are for the <a href="https://writingaboutwriting.net">Writing About Writing</a> Standing Group (WAW-SG) of the Conference on College Composition and Communication (CCCC), and for our very own <a href="https://benmiller314.github.io/cdm2023spring">Composing Digital Media</a>. And there's always the <a href="http://www.csszengarden.com/">CSS Zen Garden...</a>

3. _Electrate Autobiography_. My colleague Stephen Quigley has put together a guided exercise in reflecting on your networks of influence that functions as a kind of behind-the-scenes hands-on-code version of an Adobe Spark. Template-style writing prompts are hidden in comments on the html, and the CSS is fully customizable. Have a look at [https://github.com/Pitt-Fuego/Electrate-Fuego](https://github.com/Pitt-Fuego/Electrate-Fuego#readme) for more information!
  - NB: The templates assume you *don't* already have a GitHub account or repository to work in. No worries: when you get to the step on downloading the .zip, you can uncompress the files into your website repo for this class instead of starting from scratch.

And if your parachute is malfunctioning (i.e. you'd like even more specific direction), just let me know! I'm happy to talk things out in office hours.

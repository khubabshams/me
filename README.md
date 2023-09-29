# theMinimalism
 
theMinimalism is a website that helps people to simplify their lives and motivates them to pursue achieving more goals by using fewer things. theMinimalism will be useful for people who want to improve the quality of their lives and it provides them with some lifehack techniques for more simplicity, productivity, and valuable goals.
 
<kbd>![Responsive Mockup](/docs/different_screen_sizes.PNG)</kbd>
 
## Mockups
 
- __Home Screen__
 
<kbd>![Home Mockup](/docs/mockups/home.PNG)</kbd>
 
- __Articles Screen__
 
<kbd>![Articles Mockup](/docs/mockups/articles.PNG)</kbd>
 
- __Books Screen__
 
<kbd>![Books Mockup](/docs/mockups/books.PNG)</kbd>
 
- __About Screen__
 
<kbd>![About Mockup](/docs/mockups/about.PNG)</kbd>
 
 
## Features
 
### Existing Features
 
- __Quotes__
 
  - The home page includes some quotes to help users understand what Minimalism is and it works as an encouragement to adopt minimalism.
  - Credit for the quote owner/ source has been added below each quote.
 
<kbd>![Definition Quote](/docs/screenshots/quote-1.PNG)</kbd>
 
 
<kbd>![Motivation Quote](/docs/screenshots/quote-2.PNG)</kbd>
 
 
- __The Card Slides__
 
  - Two cards in the middle of the home page with slide text to catch visitors' attention.
  - The first one contains reasons why a minimalist lifestyle is important and the other is about how to adopt minimalism.
 
<kbd>![Slide Card Left](/docs/screenshots/slide-card-left.PNG)</kbd>
 
 
<kbd>![Slide Card Right](/docs/screenshots/slide-card-right.PNG)</kbd>
 
 
- __The Article Brief__
 
  - Included inside the home page as well to give the visitor the idea of the article in a few lines and images from the full article.
  - Visitors can easily navigate to read the whole article by clicking on the 'Full Article' button.
 
 <kbd>![Article Brief](/docs/screenshots/article-brief.PNG)</kbd>
 
- __Articles__
 
  - The articles page is a list of theMinimalism articles sorted in categories: Recently Added and Most Popular, the author of each article has been mentioned.
  - When the user clicks on one of the articles it takes him to the full article page.
 
<kbd>![Articles](/docs/screenshots/articles-page.PNG)</kbd>
 
 
<kbd>![Full Article](/docs/screenshots/article-full.PNG)</kbd>
 
 
- __Books__
 
   - The books page is a list of book recommendations provided by theMinimalism, and the author of each book has been mentioned.
   - The link of each book refers the user to its Goodreads profile where he can find reviews, quotes, and links to buy the book if he like it.
 
<kbd>![Book Recommendations](/docs/screenshots/books-page.PNG)</kbd>
 
- __About__
 
   - About page contains information about thMinimalism is built, who is the site owner and tells his story of founding theMinimalism.
 
<kbd>![About Us](/docs/screenshots/about-page.PNG)</kbd>
 
 
### Features Left to Implement
 
- Mailing List Subscription: send frequent users emails about the new articles, books, and events.
 
- Minimalists forum: where users can share their experiences.
 
## Testing
 
- Site has been tested in different browsers and screen sizes using Google Chrome developer tools and on Firefox and Microsoft browsers as well with no error returned, test was conducted also on mobile iPhone 6 (1334-by-750-pixel resolution at 326 PPI) and its functioning as required.
 
### Features Testing
 
#### Minimal Design
- An important aspect of building this site is to be designed in a minimal way, which means fewer colours; and spaces are made everywhere to provide a comfortable site.
- Simple Color Palette:
<kbd>![Site Color Palette](/docs/color_palette.PNG)</kbd>
 
#### Home Page
- Cover video has been replaced by an image -and changed in mockups as well- after noticing it's not matching the overall image colours of the home page.
- Header has been set to be fixed after testing to ease the site navigation journey.
 
#### Quotes
- Quotes are eye-catching and have different font size values depending on the screen size.
 
#### Card Slides
- Text on cards is shown by hovering the pointer over the image area for desktops and by clicking on the image for touch screen devices.
 
#### Article Brief
- Image fits the slice of the brief area, text ensured to be readable and hovering on the 'Full Article' button changes its colour and shows a 'right arrow' as a reference of the new page that will be open on button click.
 
#### Articles
- Cover image has been replaced by a smaller size image to improve the performance of the articles page after testing on Lighthouse.
 
#### Books
- All links on the book recommendations page have been tested and it opens the intended Goodreads profile in a new tab, aria-label has been added.  
 
#### Text Blocks
- Text blocks like articles, book recommendation, and about pages has been carefully formatted in the centre of the screen with justified text for better readability and helps the user to focus on the content.
 
<kbd>![Article Text Block](/docs/screenshots/article-full-2.PNG)</kbd>
 
### Interesting Bugs
- Below are some bugs which I found interesting to discover and resolve:
 
#### URLs on the manifest are not working
 
- Bug: URLs of Favicon and the index page in the site manifest file are not found by the client browser, it causes a console error of 404.
- Discovered by: testing by the dev tools.
- Action: it seemed as if GitHub pages access any link started by '/' as it is located in 'https://username.github.io/' directly and it ignores the repository name in the URL 'https://username.github.io/repo', I used the file absolute path to Favicon and index page.
- Result: problem solved and the browser is able now to access those files.
 
<kbd>![Manifest Issue](/docs/tests/manifest-issue.PNG)</kbd>
 
 
#### Button cannot be a descendent of an anchor tag
 
- Bug: using the anchor as a parent of the button in the 'Full Article' action, to get the button style and the anchor functionality.
- Discovered by: the W3C validator.
- Action: after research, I found that each one of these tags has a different purpose; the button used for interactive control of submitting or performing an action on the page itself, and the anchor for navigation, "...click to do both of those things at once" credit goes to [Quentin on Stackoverflow](https://stackoverflow.com/questions/71442188/why-shouldnt-the-button-element-be-a-descendant-of-the-anchor-element), I removed the button tag and styled the anchor to look like a button.
- Result: it performs functionally as an anchor and provides the same look as the button.
 
#### Div cannot be a descendent of a paragraph tag
 
- Bug: in quotes, I added a div for credit inside the paragraph tag, to style it in a different format than the rest of the paragraph.
- Discovered by: the W3C validator.
- Action: I moved the div outside of the paragraph tags.
- Result: it has the same style right now and with no error raised in the W3C validator.
 
<kbd>![Div Inside P Tags](/docs/tests/resolved-quotes-issue.PNG)</kbd>
 
 
### Lighthouse Report
 
 - Lighthouse reports have been generated for this site and the result is as follows:
 
#### Desktop
 
 <kbd>![Home](/docs/tests/index.PNG)</kbd>
 
 <kbd>![Articles](/docs/tests/articles.PNG)</kbd>
 
 <kbd>![Books](/docs/tests/books.PNG)</kbd>
 
 <kbd>![About](/docs/tests/about.PNG) </kbd>
 
#### Mobile
 
 <kbd>![Home on Mobile](/docs/tests/index-mobile.PNG)</kbd>
 
 <kbd>![Articles on Mobile](/docs/tests/articles-mobile.PNG)</kbd>
 
 <kbd>![Books on Mobile](/docs/tests/books-mobile.PNG)</kbd>
 
 <kbd>![About on Mobile](/docs/tests/about-mobile.PNG) </kbd>
 
### Validator Testing
 
- HTML
  - No errors were returned when passing through the official [W3C validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Fkshamse.github.io%2Fminimalism%2Findex.html)
- CSS
  - No errors were found when passing through the official [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fkshamse.github.io%2Fminimalism%2Findex.html&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)
 
<kbd>![Jigsaw-Validator](/docs/tests/jigsaw-css-test.PNG)</kbd>
 
 
## Deployment
 
- The site was deployed to GitHub pages. The steps to deploy are as follows:
  - In the GitHub repository, navigate to the Settings tab
  - From the source section drop-down menu, select the Main Branch
  - Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment.
 
The live link can be found here - https://khubabshams.github.io/minimalism/index.html
 
 
## Credits
 
### Content
 
- The quotes on the Home page were originally taken from the source/ owner below each quote.
- Card slide text on why minimalism and how to adopt it was taken from an article from [Eqbal Volinuskhi Blog](https://www.eqbalvolinuskhi.com/articles/what-is-minimalism-a-simple-lifestyle-explained).
- The Article "Why we want things we don’t need?" is a part of an article from [James Clear website](https://jamesclear.com/minimalism).
- The Article "7 Ways to sample minimalist living and living with less" is a part of an article written by Joshua Becker on [Becoming Minimalist](https://www.becomingminimalist.com/minimalist-living/).
- Book recommendations is originally a list of top Minimalism books on [Goodreads](https://www.goodreads.com/list/show/83055.Minimalism).
- About page text has been generated by [About Us Generator](https://www.aboutuspagegenerator.com/).
 
### Code
- The idea of using variables in the CSS file is taken from [GeeksforGeeks](https://www.geeksforgeeks.org/how-to-define-colors-as-variables-in-css/).
- The slide card snippet was taken from [W3Schools](https://www.w3schools.com/howto/howto_css_image_overlay_slide.asp).
- The icons in the footer were taken from [Font Awesome](https://fontawesome.com/).
- Readme file created by using [Code Institute Readme Template](https://github.com/Code-Institute-Solutions/readme-template).
- A lot of issues have been resolved with the help of [Stackoverflow](https://stackoverflow.com/) contributors.
 
### Media
 
- The images used for this website were downloaded from [Pexels](https://www.pexels.com/) and [Unsplash](https://unsplash.com/).
- The website favicon has been generated using [Favicon Generator](https://favicon.io/favicon-generator/).
- Mockup has been created using [Balsamiq Wireframes](https://balsamiq.com/)
 

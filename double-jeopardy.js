const test = []
const categories = [
  {
    title: 'Sci-Fi Stuff',
    clues: [
      {
        text: `The latex prosthetic ears worn by this 'Star Trek' actor in the late '60s even have some residual makeup left on them`,
        value: 200,
        answer: `Who is Leonard Nimoy`
      },
      {
        text: `The piece here is really green cast resin in crystal form, but in 'Superman III', it was called this, & appeared onscreen with Christopher Reeve`,
        value: 400,
        answer: `What is Kryptonite`
      },
      {
        text: `Seen in Dr. Zaius' private chambers, the Lawgiver statue from this 1968 film looks to be stone, but is actually made of cast & carved rigid polyfoam`,
        value: 600,
        answer: `What is Planet of the Apes`
      }
    ]
  },
  {
    title: 'TV Shows By Couple',
    clues: [
      {
        text: `Monica & Chandler`,
        value: 200,
        answer: `What is Friends`
      },
      {
        text: `Carrie & Mr. Big`,
        value: 400,
        answer: `What is Sex and the City`
      },
      {
        text: `Jim Halpert & Pam Beesly, who hooked up at work`,
        value: 600,
        answer: `What is The Office`
      }
    ]
  },
  {
    title: 'Mother Goose',
    clues: [
      {
        text: `They were the 'Three Men in a Tub'`,
        value: 200,
        answer: `Who is the butcher, the baker, the candlestick maker`
      },
      {
        text: `March winds & April showers brings forth these`,
        value: 400,
        answer: `What is May Flowers`
      },
      {
        text: `After 'Jack fell down and broke his crown', he 'went to bed to mend his head' using brown paper & this liquid`,
        value: 600,
        answer: `What is Vinegar`
      }
    ]
  }
]

const $section = $('#board')
const section = []

for (const category of categories) {
  section.push(`<div class="category">`)
  section.push(`<div class="title">${category.title}</div>`)
  for (clue of category.clues){
    section.push(`<div class="cell" data-clue="${clue.text}" data-answer="${clue.answer}">${clue.value}</div>`)
  }
  section.push(`</div>`)

  $section.html(section.join(''))
}
    const $overlay = $('#overlay')
    const $clue = $('#clue')
    const $answer = $('#answer')
    const $button = $('#close')

    $section.click(function(e) {
      if ($(e.target).hasClass('cell')){
        $overlay.addClass('show')
        $clue.text(e.target.dataset.clue)
        $answer.text(e.target.dataset.answer)
      }
    })

    $button.click(function(e) {
      if (!($answer.hasClass('show'))){
        $answer.addClass('show')
        $button.text('Close')
      } else{
        $answer.removeClass('show')
        $button.text('Show Answer')
        $overlay.removeClass('show')
      }
    })
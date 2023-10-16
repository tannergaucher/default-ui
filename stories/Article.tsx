import React from 'react'

export interface ArticleProps {
  type?: 'content' | 'card'
}

export function Article({ type }: { type?: 'content' | 'card' }) {
  return (
    <article>
      <img src="https://source.unsplash.com/random/" alt="Article"></img>
      {type === 'content' ? <h1>Article Title</h1> : <h3>Card Title</h3>}
      {type === 'content' ? <h2>Article Subtitle</h2> : null}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        malesuada lacus ex, sit amet blandit leo lobortis eget.
      </p>
      {type === 'content' ? (
        <>
          <p>
            Mauris suscipit velit ac quam suscipit pretium. Nullam varius
            pulvinar nunc id sodales. Vestibulum sodales eros nec lacus pharetra
            euismod. Phasellus dignissim semper ante, sed ullamcorper nisl
            consequat in. Cras tristique tortor vitae scelerisque elementum. In
            hac habitasse platea dictumst. Curabitur nunc nunc, auctor rhoncus
            ultricies a, porttitor sit amet neque. Quisque quis vehicula metus.
            Cras varius tincidunt orci at suscipit. Sed eget ex quis tellus
            aliquam pulvinar sit amet sit amet ex.
          </p>
          <p>
            In quis elementum felis. Sed in mattis mi. Integer laoreet turpis a
            accumsan pharetra. Nam eu turpis eget justo tincidunt mollis sit
            amet volutpat nunc. Cras et nunc ut nisl pulvinar laoreet sit amet
            nec lectus. Integer lobortis nunc ut ornare viverra. Class aptent
            taciti sociosqu ad litora torquent per conubia nostra, per inceptos
            himenaeos. Sed vel mauris eleifend, malesuada libero et, porttitor
            urna. Morbi tincidunt, quam non molestie interdum, sapien nibh
            gravida est, ac tempor nisi urna eu nunc. Fusce sollicitudin ac
            dolor ac volutpat. Nulla tincidunt, arcu ac porttitor dapibus,
            turpis felis finibus augue, quis porta massa velit rutrum arcu.
          </p>
          <p>
            Integer ex mauris, scelerisque ut risus eget, commodo efficitur
            turpis. Suspendisse ultricies lorem id urna mollis pharetra a at
            ligula. Nulla mollis massa ac tellus posuere, sed maximus dolor
            laoreet. Duis venenatis eros lorem, id tristique ligula laoreet ac.
            Sed luctus ac sem vel volutpat. Proin sed lobortis ante. Nam
            fermentum fringilla lorem sit amet facilisis. Nam elementum enim nec
            nisl dapibus, et varius eros imperdiet. Curabitur aliquam velit a
            nisi faucibus, et dignissim urna fringilla. Curabitur quis facilisis
            tellus. Morbi dignissim convallis lorem, eu malesuada purus
            tristique non. Morbi pharetra vel lectus id malesuada. Sed arcu leo,
            lacinia id porttitor a, auctor nec dolor. Fusce tincidunt eros vel
            vehicula commodo. Vestibulum ante ipsum primis in faucibus orci
            luctus et ultrices posuere cubilia curae; malesuada lacus ex, sit
            amet blandit leo lobortis eget.
          </p>
        </>
      ) : null}
    </article>
  )
}

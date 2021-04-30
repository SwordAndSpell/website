// Node modules.
import * as React from "react"
// Relative imports.
import Layout from "../components/layout"
import { Wrapper } from "../components/cardsPage"
import Seo from "../components/seo"

const ToDoPage = () => (
  <Layout>
    <Seo title="to do list" />
    <Wrapper>
      <h1>List of all things that still need to be done</h1>
      <section>
        <h2>Spells</h2>
        <ul>
          <li>generate content (aka make all the spells)</li>
          <li>input content to data repo</li>
          <li>make wiki page</li>
          <li>set up wiki page layout / styling</li>
        </ul>
      </section>
      <section>
        <h2>Summon stat blocks</h2>
        <ul>
          <li>input content to data repo</li>
          <li>make wiki page</li>
          <li>set up wiki page layout / styling</li>
        </ul>
      </section>
      <section>
        <h2>shapechange forms</h2>
        <ul>
          <li>input content to data repo</li>
          <li>make wiki page</li>
          <li>set up wiki page layout / styling</li>
        </ul>
      </section>
      <section>
        <h2>animal companions</h2>
        <ul>
          <li>input content to data repo</li>
          <li>make wiki page</li>
          <li>set up wiki page layout / styling</li>
        </ul>
      </section>
      <section>
        <h2>leveling chart</h2>
        <ul>
          <li>update styling to make it look good</li>
        </ul>
      </section>
      <section>
        <h2>spellcasting charts</h2>
        <ul>
          <li>update styling to make it look good</li>
        </ul>
      </section>
      <section>
        <h2>update the landing page to do something / have info</h2>
      </section>
      <section>
        <h2>identity features work</h2>
        <ul>
          <li>want to be able to search for features based off text</li>
          <li>want to be able to filter by applicable core identity</li>
          <li>
            want to be able to filter out features we don't have the
            requirements for
          </li>
        </ul>
      </section>
      <section>
        <h2>create back to top for mobile</h2>
      </section>
      <section>
        <h2>Potential improvements</h2>
        <ul>
          <li>table of contents for races</li>
          <li>search bar style filtering for backgrounds</li>
        </ul>
      </section>
    </Wrapper>
  </Layout>
)

export default ToDoPage

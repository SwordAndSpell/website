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
        <h2>push it live to the url</h2>
      </section>
    </Wrapper>
  </Layout>
)

export default ToDoPage

// Node modules.
import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
// Relative imports.
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Wrapper } from "../components/cardsPage"
import Chevron from "../components/icons/Chevron"
import { onCollapseToggle } from "../utils"
import CompanionStatBlock from "../components/CompanionStatBlock"

const CompanionsPage = () => {
  const queryResult = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          COMPANIONS {
            abilities {
              description
              name
            }
            actions {
              description
              name
            }
            armor
            charisma
            constitution
            defense
            dexterity
            fortitude
            hitPoints
            id
            intelligence
            skills
            skillLevel
            name
            senses
            reflex
            speed
            strength
            type
            will
            wisdom
          }
        }
      }
    }
  `)

  const [expandedBlocksIDs, setExpandedBlocksIDs] = useState([])
  const COMPANIONS = queryResult?.site?.siteMetadata?.COMPANIONS

  return (
    <Layout>
      <Seo title="Animal Companions" />
      <Wrapper>
        <h2>Animal Companions</h2>
        <ul>
          <li>
            <header
              className="no-background-image"
              onKeyDown={event => {
                // On enter, toggle expanded/expanded.
                if (event.keyCode === 13) {
                  onCollapseToggle(
                    "Young",
                    expandedBlocksIDs,
                    setExpandedBlocksIDs
                  )
                }
              }}
              onClick={() =>
                onCollapseToggle(
                  "Young",
                  expandedBlocksIDs,
                  setExpandedBlocksIDs
                )
              }
              role="button"
              tabIndex="0"
            >
              <h3>Young Animal Companion</h3>
              <Chevron
                className={`chevron${
                  expandedBlocksIDs.includes("Young") ? " expanded" : ""
                }`}
              />
            </header>
            {expandedBlocksIDs.includes("Young") && (
              <section className="field-group content">
                <p className="value">
                  You gain a Young Animal Companion. They have the following
                  initial stats:
                </p>
                <section className="stat-bar row">
                  <section className="stat-group">
                    <span className="label">STR</span>
                    <p className="value">+2</p>
                  </section>
                  <section className="stat-group">
                    <span className="label">DEX</span>
                    <p className="value">+2</p>
                  </section>
                  <section className="stat-group">
                    <span className="label">CON</span>
                    <p className="value">+1</p>
                  </section>
                  <section className="stat-group">
                    <span className="label">INT</span>
                    <p className="value">-3</p>
                  </section>
                  <section className="stat-group">
                    <span className="label">WIS</span>
                    <p className="value">+1</p>
                  </section>
                  <section className="stat-group">
                    <span className="label">CHA</span>
                    <p className="value">-1</p>
                  </section>
                </section>

                <section className="field-group">
                  <p className="value">
                    You may choose a physical form as you wish for your
                    companion, but the form must adhere to the following general
                    rules unless otherwise specified by the feature that granted
                    you a companion.
                  </p>
                  <p className="value">- Your companion is Small in size</p>
                  <p className="value">- Your companion is a Beast</p>
                  <p className="value">- Your companion is NOT mountable</p>

                  <p className="value">
                    Additionally, your Young Animal Companion starts with all of
                    the bonuses and modifiers of one of the Base Forms, as well
                    as 1 Companion ability and a set of Companion Skills
                  </p>
                </section>
              </section>
            )}
          </li>
          <li>
            <header
              className="no-background-image"
              onKeyDown={event => {
                // On enter, toggle expanded/expanded.
                if (event.keyCode === 13) {
                  onCollapseToggle(
                    "Mature",
                    expandedBlocksIDs,
                    setExpandedBlocksIDs
                  )
                }
              }}
              onClick={() =>
                onCollapseToggle(
                  "Mature",
                  expandedBlocksIDs,
                  setExpandedBlocksIDs
                )
              }
              role="button"
              tabIndex="0"
            >
              <div className="header-column">
                <h3>Mature Animal Companion</h3>
                {expandedBlocksIDs.includes("Mature") && (
                  <p className="extra-info">Requires Level 3</p>
                )}
              </div>
              <Chevron
                className={`chevron${
                  expandedBlocksIDs.includes("Mature") ? " expanded" : ""
                }`}
              />
            </header>
            {expandedBlocksIDs.includes("Mature") && (
              <section className="field-group content">
                <p className="value">
                  Your companion grows into a Mature Animal Companion. When your
                  companion matures, they gain the following benefits:
                </p>
                <p className="value">
                  - Increase each of its ability modifiers by 1
                </p>
                <p className="value">
                  - Increase its size from small to medium
                </p>
                <p className="value">
                  - Your companion gains an additional ability from the list of
                  companion abilities below
                </p>
                <p className="value">
                  - Each of their skill proficiencies increases to Trained
                </p>
              </section>
            )}
          </li>
          <li>
            <header
              className="no-background-image"
              onKeyDown={event => {
                // On enter, toggle expanded/expanded.
                if (event.keyCode === 13) {
                  onCollapseToggle(
                    "Specialized",
                    expandedBlocksIDs,
                    setExpandedBlocksIDs
                  )
                }
              }}
              onClick={() =>
                onCollapseToggle(
                  "Specialized",
                  expandedBlocksIDs,
                  setExpandedBlocksIDs
                )
              }
              role="button"
              tabIndex="0"
            >
              <div className="header-column">
                <h3>Specialized Animal Companion</h3>
                {expandedBlocksIDs.includes("Specialized") && (
                  <p className="extra-info">Requires Level 5</p>
                )}
              </div>
              <Chevron
                className={`chevron${
                  expandedBlocksIDs.includes("Specialized") ? " expanded" : ""
                }`}
              />
            </header>
            {expandedBlocksIDs.includes("Specialized") && (
              <section className="field-group content">
                <p className="value">
                  Your companion grows into a Nimble or Savage Animal Companion,
                  the natural height of their species, and gains the following
                  benefits:
                </p>
                <p className="value">
                  - Increase your companion’s main ability score modifier
                  (strength or dexterity) by 1
                </p>
                <p className="value">
                  - Increase three other ability score modifiers of your choice
                  by 1
                </p>
                <p className="value">
                  - Increase the number of damage dice dealt on each of its
                  attacks by 1
                </p>
                <p className="value">
                  - Its size increases from medium to large
                </p>
                <p className="value">
                  - Each of their skill proficiencies increases to Expert
                </p>
                <p className="value">
                  - Its attacks become magical for the purposes of ignoring
                  resistances
                </p>
                <p className="value">
                  - It gains the following multi-attack ability: 2 Actions -
                  Your companion makes two attacks without suffering the
                  multi-attack penalty.
                </p>
              </section>
            )}
          </li>
          <li>
            <header
              className="no-background-image"
              onKeyDown={event => {
                // On enter, toggle expanded/expanded.
                if (event.keyCode === 13) {
                  onCollapseToggle(
                    "Apex",
                    expandedBlocksIDs,
                    setExpandedBlocksIDs
                  )
                }
              }}
              onClick={() =>
                onCollapseToggle(
                  "Apex",
                  expandedBlocksIDs,
                  setExpandedBlocksIDs
                )
              }
              role="button"
              tabIndex="0"
            >
              <div className="header-column">
                <h3>Apex Animal Companion</h3>
                {expandedBlocksIDs.includes("Apex") && (
                  <p className="extra-info">Requires Level 7</p>
                )}
              </div>
              <Chevron
                className={`chevron${
                  expandedBlocksIDs.includes("Apex") ? " expanded" : ""
                }`}
              />
            </header>
            {expandedBlocksIDs.includes("Apex") && (
              <section className="field-group content">
                <p className="value">
                  Your companion grows into an Apex Animal Companion, and has
                  advanced beyond what is possible in the natural world. It
                  gains the following benefits:
                </p>
                <p className="value">
                  - Increase each of your companion's ability score modifiers by
                  1
                </p>
                <p className="value">
                  - Each of their skill proficiencies increases to Master
                </p>
                <p className="value">
                  - Increase the number of damage dice dealt on each of its
                  attacks by 1
                </p>
                <p className="value">
                  - When your companion takes the multi-attack action, it makes
                  3 attacks instead of 2
                </p>
              </section>
            )}
          </li>
        </ul>
        <h2>Animal Companion References</h2>
        <ul>
          <li>
            <header
              className="no-background-image"
              onKeyDown={event => {
                // On enter, toggle expanded/expanded.
                if (event.keyCode === 13) {
                  onCollapseToggle(
                    "Command",
                    expandedBlocksIDs,
                    setExpandedBlocksIDs
                  )
                }
              }}
              onClick={() =>
                onCollapseToggle(
                  "Command",
                  expandedBlocksIDs,
                  setExpandedBlocksIDs
                )
              }
              role="button"
              tabIndex="0"
            >
              <h3>Commanding your companion</h3>
              <Chevron
                className={`chevron${
                  expandedBlocksIDs.includes("Command") ? " expanded" : ""
                }`}
              />
            </header>
            {expandedBlocksIDs.includes("Command") && (
              <section className="field-group content">
                <p className="value">
                  Your animal takes their turn on your initiative, directly
                  after your turn. You can use an action on your turn to take
                  the Command an Animal action, which grants your companion 2
                  actions they can use on their turn.
                </p>
                <p className="value">
                  If you do not issue commands to your companion, they will
                  behave under the direction of the DM, typically protecting
                  themselves from immediate threats or fleeing from danger.
                </p>
              </section>
            )}
          </li>
          <li>
            <header
              className="no-background-image"
              onKeyDown={event => {
                // On enter, toggle expanded/expanded.
                if (event.keyCode === 13) {
                  onCollapseToggle(
                    "Forms",
                    expandedBlocksIDs,
                    setExpandedBlocksIDs
                  )
                }
              }}
              onClick={() =>
                onCollapseToggle(
                  "Forms",
                  expandedBlocksIDs,
                  setExpandedBlocksIDs
                )
              }
              role="button"
              tabIndex="0"
            >
              <h3>Companion Base Forms</h3>
              <Chevron
                className={`chevron${
                  expandedBlocksIDs.includes("Forms") ? " expanded" : ""
                }`}
              />
            </header>
            {expandedBlocksIDs.includes("Forms") && (
              <section className="field-group content">
                <p className="value">
                  Your companion gains various stat bonuses and other statistics
                  based on the form you choose for them. The three available
                  forms are listed below:
                </p>
                <h4>Brute</h4>
                <section className="fields column">
                  <section className="field-group row">
                    <h4>Stat Bonuses:</h4>
                    <p className="inline-value">STR +1, CON +1</p>
                  </section>
                  <section className="field-group row">
                    <h4>Defense:</h4>
                    <p className="inline-value">
                      13 + Dex Modifier + Your Level
                    </p>
                  </section>
                  <section className="field-group row">
                    <h4>Armor:</h4>
                    <p className="inline-value">1 + (Your Level / 2)</p>
                  </section>
                  <section className="field-group row">
                    <h4>Hit Points:</h4>
                    <p className="inline-value">Your Level * (Con + 6)</p>
                  </section>
                  <section className="field-group row">
                    <h4>Land Speed:</h4>
                    <p className="inline-value">25</p>
                  </section>
                  <section className="field-group row">
                    <h4>Alt Speed:</h4>
                    <p className="inline-value">Swim or Climb: 25</p>
                  </section>
                  <section className="field-group row">
                    <h4>Senses:</h4>
                    <p className="inline-value">
                      Low-Light Vision, Keen Hearing and Smell
                    </p>
                  </section>
                  <section className="field-group row">
                    <h4>Attack:</h4>
                    <p className="inline-value">
                      Melee attack: Bite, Str + Your Level to hit; On Hit: 1d8 +
                      Str slashing damage
                    </p>
                  </section>
                </section>

                <h4>Stalker</h4>
                <section className="fields column">
                  <section className="field-group row">
                    <h4>Stat Bonuses:</h4>
                    <p className="inline-value">DEX +1, INT +1</p>
                  </section>
                  <section className="field-group row">
                    <h4>Defense:</h4>
                    <p className="inline-value">
                      13 + Dex Modifier + Your Level
                    </p>
                  </section>
                  <section className="field-group row">
                    <h4>Armor:</h4>
                    <p className="inline-value">(Your Level / 2)</p>
                  </section>
                  <section className="field-group row">
                    <h4>Hit Points:</h4>
                    <p className="inline-value">Your Level * (Con + 5)</p>
                  </section>
                  <section className="field-group row">
                    <h4>Land Speed:</h4>
                    <p className="inline-value">35</p>
                  </section>
                  <section className="field-group row">
                    <h4>Alt Speed:</h4>
                    <p className="inline-value">Swim or Climb: 35</p>
                  </section>
                  <section className="field-group row">
                    <h4>Senses:</h4>
                    <p className="inline-value">
                      Darkvision 60ft, Keen Hearing and Smell
                    </p>
                  </section>
                  <section className="field-group row">
                    <h4>Attack:</h4>
                    <p className="inline-value">
                      Melee attack: Claw, Dex + Your Level to hit; On Hit: 1d6 +
                      Str slashing damage
                    </p>
                  </section>
                </section>

                <h4>Avian</h4>
                <section className="fields column">
                  <section className="field-group row">
                    <h4>Stat Bonuses:</h4>
                    <p className="inline-value">DEX +1, WIS +1</p>
                  </section>
                  <section className="field-group row">
                    <h4>Defense:</h4>
                    <p className="inline-value">
                      12 + Dex Modifier + Your Level
                    </p>
                  </section>
                  <section className="field-group row">
                    <h4>Armor:</h4>
                    <p className="inline-value">1</p>
                  </section>
                  <section className="field-group row">
                    <h4>Hit Points:</h4>
                    <p className="inline-value">Your Level * (Con + 4)</p>
                  </section>
                  <section className="field-group row">
                    <h4>Land Speed:</h4>
                    <p className="inline-value">10</p>
                  </section>
                  <section className="field-group row">
                    <h4>Alt Speed:</h4>
                    <p className="inline-value">Fly: 50</p>
                  </section>
                  <section className="field-group row">
                    <h4>Senses:</h4>
                    <p className="inline-value">Darkvision 120ft</p>
                  </section>
                  <section className="field-group row">
                    <h4>Attack:</h4>
                    <p className="inline-value">
                      Melee attack: Talon, Dex + Your Level to hit; On Hit: 1d4
                      + Str slashing damage
                    </p>
                  </section>
                </section>
              </section>
            )}
          </li>

          <li>
            <header
              className="no-background-image"
              onKeyDown={event => {
                // On enter, toggle expanded/expanded.
                if (event.keyCode === 13) {
                  onCollapseToggle(
                    "Abilities",
                    expandedBlocksIDs,
                    setExpandedBlocksIDs
                  )
                }
              }}
              onClick={() =>
                onCollapseToggle(
                  "Abilities",
                  expandedBlocksIDs,
                  setExpandedBlocksIDs
                )
              }
              role="button"
              tabIndex="0"
            >
              <h3>Companion Abilities</h3>
              <Chevron
                className={`chevron${
                  expandedBlocksIDs.includes("Abilities") ? " expanded" : ""
                }`}
              />
            </header>
            {expandedBlocksIDs.includes("Abilities") && (
              <section className="field-group content">
                <p className="value">
                  Each companion starts out with a single special ability they
                  can perform on their turn.
                </p>
                <section className="field-group">
                  <h4>Darting Strike</h4>
                  <p className="value">
                    1 Action - Your companion steps up to 10 feet, makes a
                    single attack, and then steps up to 10 feet again. (Note:
                    step does not trigger attacks of opportunity)
                  </p>
                </section>
                <section className="field-group">
                  <h4>Gore / Maul</h4>
                  <p className="value">
                    1 Action - Your companion strides up to 15 feet before
                    making an attack against its target, on a successful hit the
                    target takes an additional 1d8 damage.
                  </p>
                </section>
                <section className="field-group">
                  <h4>Pounce / Tackle</h4>
                  <p className="value">
                    1 Action - Your companion strides up to 15 feet before
                    making an attack against its target, on a successful hit the
                    target must make a Fortitude saving throw against your class
                    DC or be knocked prone.
                  </p>
                </section>
                <section className="field-group">
                  <h4>Flyby (Requires Avian)</h4>
                  <p className="value">
                    2 Actions - Your companion flies up to its full movement
                    speed and makes a talon attack against any creature along
                    its path. This movement does not provoke opportunity
                    attacks.
                  </p>
                </section>
                <section className="field-group">
                  <h4>Fury</h4>
                  <p className="value">
                    1 Action - Lasts 1 minute or until knocked unconscious -
                    Your companion doubles its strength score when calculating
                    its damage from its melee attacks, and increases its armor
                    value by 2. The animal companion no longer responds to
                    commands for the duration, and focuses all of its actions on
                    the target nearest to it.
                  </p>
                </section>
                <section className="field-group">
                  <h4>Pack Hunter</h4>
                  <p className="value">
                    Your companion has advantage on all melee attacks when you
                    or another ally is within 5 feet of its target.
                  </p>
                </section>
                <section className="field-group">
                  <h4>Hamstring</h4>
                  <p className="value">
                    1 Action - Your companion goes for its target’s tendons,
                    hamstringing it on a successful strike. Your companion makes
                    a melee attack, and on a hit forces its target to make a
                    Fortitude saving throw against your Ability DC. On a failed
                    save, your target’s move speed is reduced by 15 feet until
                    the start of your next turn.
                  </p>
                </section>
              </section>
            )}
          </li>

          <li>
            <header
              className="no-background-image"
              onKeyDown={event => {
                // On enter, toggle expanded/expanded.
                if (event.keyCode === 13) {
                  onCollapseToggle(
                    "Abilities",
                    expandedBlocksIDs,
                    setExpandedBlocksIDs
                  )
                }
              }}
              onClick={() =>
                onCollapseToggle(
                  "Skills",
                  expandedBlocksIDs,
                  setExpandedBlocksIDs
                )
              }
              role="button"
              tabIndex="0"
            >
              <h3>Companion Skills</h3>
              <Chevron
                className={`chevron${
                  expandedBlocksIDs.includes("Skills") ? " expanded" : ""
                }`}
              />
            </header>
            {expandedBlocksIDs.includes("Skills") && (
              <section className="field-group content">
                <p className="value">
                  Depending on the circumstances, your companion can assist you
                  with or make checks for you in any of the skills they have at
                  least apprentice proficiency in.
                </p>
                <p className="value">
                  Your companion begins with apprentice proficiency in two of
                  the following skills:
                </p>
                <h4>- Intimidation</h4>
                <h4>- Investigation</h4>
                <h4>- Stealth</h4>
                <h4>- Survival</h4>
                <p className="value">
                  Your companion automatically has apprentice proficiency in
                  Athletics, Acrobatics, and Perception.
                </p>
              </section>
            )}
          </li>
        </ul>
        <h2>Sample Stat Blocks</h2>
        <ul>
          {COMPANIONS?.map(companion => {
            // Derive if the details are expanded.
            const id = companion?.id
            const isExpanded = expandedBlocksIDs?.includes(id)
            return (
              <li key={id}>
                <CompanionStatBlock
                  data={companion}
                  isOpen={isExpanded}
                  clickHandler={() =>
                    onCollapseToggle(
                      id,
                      expandedBlocksIDs,
                      setExpandedBlocksIDs
                    )
                  }
                />
              </li>
            )
          })}
        </ul>
      </Wrapper>
    </Layout>
  )
}

export default CompanionsPage

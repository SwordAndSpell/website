// Node modules.
import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
// Relative imports.
import Layout from "../components/layout"
import Seo from "../components/seo"
import uniq from "lodash/uniq"
import { Wrapper } from "../components/staticPageWrapper"
import { onCollapseToggle } from "../utils"
import StatBlock from "../components/StatBlock"

const CompanionsPage = () => {
  const onFilterToggle = (filterToToggle, activeFilters, setActiveFilters) => {
    // Expand the ID.
    if (activeFilters?.includes(filterToToggle)) {
      setActiveFilters(
        activeFilters?.filter(filter => filter !== filterToToggle)
      )
      return
    }

    // toggle the filter
    setActiveFilters(uniq([...activeFilters, filterToToggle]))
  }

  const [activeFilters, setActiveFilters] = useState(["Young"])

  return (
    <Layout>
      <Wrapper>
        <h2>Animal Companions</h2>
        <div className="card">
          <h3
            className="hover"
            onClick={() =>
              onFilterToggle("Command", activeFilters, setActiveFilters)
            }
          >
            Commanding your Companion
          </h3>
          {activeFilters.includes("Command") && (
            <p>
              Your animal takes their turn on your initiative, directly after
              your turn. You can use an action on your turn to take the Command
              an Animal action, which grants your companion 2 actions they can
              use on their turn. If you do not issue commands to your companion,
              they will behave under the direction of the DM, typically
              protecting themselves from immediate threats or fleeing from
              danger.
            </p>
          )}
        </div>

        <div className="card">
          <h3
            className="hover"
            onClick={() =>
              onFilterToggle("Young", activeFilters, setActiveFilters)
            }
          >
            Young Animal Companion
          </h3>
          {activeFilters.includes("Young") && (
            <>
              <p>
                You gain a Young Animal Companion. They have the following
                initial stats:
              </p>
              <section className="wide-stats">
                <section className="stat">
                  <p className="label">STR</p>
                  <p className="value">+2</p>
                </section>
                <section className="stat">
                  <p className="label">DEX</p>
                  <p className="value">+2</p>
                </section>
                <section className="stat">
                  <p className="label">CON</p>
                  <p className="value">+1</p>
                </section>
                <section className="stat">
                  <p className="label">INT</p>
                  <p className="value">-3</p>
                </section>
                <section className="stat">
                  <p className="label">WIS</p>
                  <p className="value">+1</p>
                </section>
                <section className="stat">
                  <p className="label">CHA</p>
                  <p className="value">-1</p>
                </section>
              </section>
              <p>
                You may choose a physical form as you wish for your companion,
                but the form must adhere to the following general rules unless
                otherwise specified by the feature that granted you a companion.
              </p>
              <ul>
                <li>- Your companion is Small in size</li>
                <li>- Your companion is a Beast</li>
                <li>- Your companion is NOT mountable</li>
              </ul>
              <h4
                className="hover"
                onClick={() =>
                  onFilterToggle("Forms", activeFilters, setActiveFilters)
                }
              >
                Forms
              </h4>

              {activeFilters.includes("Forms") && (
                <>
                  <p>
                    Your companion gains various stat bonuses and other
                    statistics based on the form you choose for them. The three
                    available forms are listed below:
                  </p>
                  <h5>Brute</h5>
                  <ul>
                    <li>- STR +1, CON +1</li>
                    <li>- Defense: 13 + Dex Modifier + Your Level</li>
                    <li>- Armor: 1+ (Your Level / 2)</li>
                    <li>- Health: Your Level * (Con + 6)</li>
                    <li>- Land Speed: 25</li>
                    <li>- Swim or Climb Speed: 25</li>
                    <li>
                      - Melee attack: Bite, Str + Your Level to hit, 1d8 + Str
                      slashing damage
                    </li>
                  </ul>
                  <h5>Stalker</h5>
                  <ul>
                    <li>- DEX +1, INT +1</li>
                    <li>- Defense: 13 + Dex Modifier + Your Level</li>
                    <li>- Armor: Your Level / 2</li>
                    <li>- Health: Your Level * (Con + 5)</li>
                    <li>- Land Speed: 35</li>
                    <li>- Swim or Climb Speed: 35</li>
                    <li>
                      - Melee attack: Claw, Dex + Your Level to hit, 1d6 + Str
                      slashing damage
                    </li>
                  </ul>
                  <h5>Avian</h5>
                  <ul>
                    <li>- DEX +1, WIS +1</li>
                    <li>- Defense: 12 + Dex Modifier + Your Level</li>
                    <li>- Armor: 1</li>
                    <li>- Health: Your Level * (Con + 4)</li>
                    <li>- Land Speed: 10</li>
                    <li>- Fly Speed: 50</li>
                    <li>
                      - Melee attack: Talon, Dex + Your Level to hit, 1d4 + Str
                      slashing damage
                    </li>
                  </ul>
                </>
              )}
              <h4
                className="hover"
                onClick={() =>
                  onFilterToggle("Abilities", activeFilters, setActiveFilters)
                }
              >
                Abilities
              </h4>
              {activeFilters.includes("Abilities") && (
                <>
                  <p>
                    Each companion starts out with a single special ability they
                    can perform on their turn.
                  </p>
                  <ul>
                    <li>
                      <strong>Darting Strike</strong> - 1 Action - Your
                      companion steps up to 10 feet, makes a single attack, and
                      then steps up to 10 feet again. (Note: step does not
                      trigger attacks of opportunity)
                    </li>
                    <li>
                      <strong>Gore / Maul</strong> - 1 Action - Your companion
                      strides up to 15 feet before making an attack against its
                      target, on a successful hit the target takes an additional
                      1d8 damage.
                    </li>
                    <li>
                      <strong>Pounce / Tackle</strong> - 1 Action - Your
                      companion strides up to 15 feet before making an attack
                      against its target, on a successful hit the target must
                      make a Fortitude saving throw against your class DC or be
                      knocked prone.
                    </li>
                    <li>
                      <strong>Flyby</strong> - 2 Actions - Your companion flies
                      up to its full movement speed and makes a talon attack
                      against any creature along its path. This movement does
                      not provoke opportunity attacks.
                    </li>
                    <li>
                      <strong>Fury</strong> - 1 Action - Lasts 1 minute or until
                      knocked unconscious - Your companion doubles its strength
                      score when calculating its damage from its melee attacks,
                      and increases its armor value by 2. The animal companion
                      no longer responds to commands for the duration, and
                      focuses all of its actions on the target nearest to it.
                    </li>
                    <li>
                      <strong>Pack Hunter</strong> - Your companion has
                      advantage on all melee attacks when you or another ally is
                      within 5’ of its target.
                    </li>
                    <li>
                      <strong>Hamstring</strong> - 1 Action - Your companion
                      goes for its target’s tendons, hamstringing it on a
                      successful strike. Your companion makes a melee attack,
                      and on a hit forces its target to make a Fortitude saving
                      throw against your Ability DC. On a failed save, your
                      target’s move speed is reduced by 15 feet until the start
                      of your next turn.
                    </li>
                  </ul>
                </>
              )}
              <h4
                className="hover"
                onClick={() =>
                  onFilterToggle("Skills", activeFilters, setActiveFilters)
                }
              >
                Skill Proficiencies
              </h4>
              {activeFilters.includes("Skills") && (
                <>
                  <p>
                    Depending on the circumstances, your companion can assist
                    you with or make checks for you in any of the skills they
                    have at least apprentice proficiency in.
                  </p>
                  <p>
                    Your companion has the apprentice proficiency level in two
                    of the following skills:
                  </p>
                  <ul>
                    <li>- Intimidation</li>
                    <li>- Stealth</li>
                    <li>- Survival</li>
                    <li>- Investigation</li>
                  </ul>
                  <p>
                    Your companion automatically has apprentice proficiency in
                    Athletics, Acrobatics, and Perception.
                  </p>
                </>
              )}
            </>
          )}
        </div>
        <div className="card">
          <h3
            className="hover"
            onClick={() =>
              onFilterToggle("Mature", activeFilters, setActiveFilters)
            }
          >
            Mature Companion
          </h3>
          {activeFilters.includes("Mature") && (
            <>
              <p className="requirement">Requires Level 3</p>
              <p>
                Your companion grows into a Mature Animal Companion. When your
                companion matures, they gain the following benefits:{" "}
              </p>
              <ul>
                <li>- Increase each of its ability modifiers by 1</li>
                <li>- Increase its size from small to medium</li>
                <li>
                  - Your companion gains an additional ability from the list of
                  companion abilities above
                </li>
              </ul>
            </>
          )}
        </div>
        <div className="card">
          <h3
            className="hover"
            onClick={() =>
              onFilterToggle("Specialized", activeFilters, setActiveFilters)
            }
          >
            Specialized Companion
          </h3>
          {activeFilters.includes("Specialized") && (
            <>
              <p className="requirement">Requires Level 5</p>
              <p>
                Your companion grows into a Nimble or Savage Animal Companion,
                the natural height of their species, and gains the following
                benefits:
              </p>
              <ul>
                <li>
                  - Increase your companion’s main ability score modifier
                  (strength or dexterity) by 1
                </li>
                <li>
                  - Increase three other ability score modifiers of your choice
                  by 1
                </li>
                <li>
                  - Increase the number of damage dice dealt on its attacks by 1
                </li>
                <li>- Its size increases from medium to large</li>
                <li>
                  - Its attacks become magical for the purposes of ignoring
                  resistances
                </li>
                <li>
                  - It gains the following multi-attack ability: 2 Actions -
                  Your companion makes two attacks without suffering the
                  multi-attack penalty.
                </li>
              </ul>
            </>
          )}
        </div>
        <div className="card">
          <h3
            className="hover"
            onClick={() =>
              onFilterToggle("Apex", activeFilters, setActiveFilters)
            }
          >
            Apex Companion
          </h3>
          {activeFilters.includes("Apex") && (
            <>
              <p className="requirement">Requires Level 7</p>
              <p>
                Your companion grows into an Apex Animal Companion, and has
                advanced beyond what is possible in the natural world. It gains
                the following benefits:
              </p>
              <ul>
                <li>
                  - Increase all of your companions ability score modifiers by 1
                </li>
                <li>
                  - Increase the number of damage dice from its attacks by 1
                </li>
                <li>
                  - When your companion takes the multi-attack action, it makes
                  3 attacks instead of 2
                </li>
              </ul>
            </>
          )}
        </div>
      </Wrapper>
    </Layout>
  )
}

export default CompanionsPage

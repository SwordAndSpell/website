// Node modules.
import React, { Fragment, useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import find from "lodash/find"
import uniq from "lodash/uniq"
// Relative imports.
import Chevron from "../components/icons/Chevron"
import Layout from "../components/layout"
import Seo from "../components/seo"
import BackToTop from "../components/BackToTop"
import { Wrapper } from "../components/cardsPage"
import { onCollapseToggle } from "../utils"

const IdentityFeaturesPage = () => {
  const queryResult = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          IDENTITY_FEATURE_REQUIREMENTS {
            id
            name
          }
          IDENTITY_FEATURES {
            firstLevelSpells
            secondLevelSpells
            thirdLevelSpells
            fourthLevelSpells
            fifthLevelSpells
            description
            featureType
            id
            identity
            name
            requirementIDs
          }
        }
      }
    }
  `)

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

  const toggleAllFilters = (activeFilters, setActiveFilters) => {
    if (activeFilters.length > 0) {
      setActiveFilters([])
      return
    }

    setActiveFilters([
      "Arcanist",
      "Barbarian",
      "Bard",
      "Champion",
      "Inheritor",
      "Mystic",
      "Priest",
      "Scoundrel",
      "Spellblade",
      "Warden",
      "Warrior",
      "Wildling",
      "Mutliclass",
      "General",
      "Armor",
      "Combat",
      "Spellcasting",
      "Patron-Sworn",
      "Animal Companion",
    ])
    return
  }

  // Derive data from the graphql query above.
  const IDENTITY_FEATURE_REQUIREMENTS =
    queryResult?.site?.siteMetadata?.IDENTITY_FEATURE_REQUIREMENTS
  const IDENTITY_FEATURES = queryResult?.site?.siteMetadata?.IDENTITY_FEATURES

  const ARCANIST_FEATURES = IDENTITY_FEATURES.filter(feature =>
    feature?.identity.includes("Arcanist")
  )
  const BARBARIAN_FEATURES = IDENTITY_FEATURES.filter(feature =>
    feature?.identity.includes("Barbarian")
  )
  const BARD_FEATURES = IDENTITY_FEATURES.filter(feature =>
    feature?.identity.includes("Bard")
  )
  const CHAMPION_FEATURES = IDENTITY_FEATURES.filter(feature =>
    feature?.identity.includes("Champion")
  )
  const INHERITOR_FEATURES = IDENTITY_FEATURES.filter(feature =>
    feature?.identity.includes("Inheritor")
  )
  const MYSTIC_FEATURES = IDENTITY_FEATURES.filter(feature =>
    feature?.identity.includes("Mystic")
  )
  const PRIEST_FEATURES = IDENTITY_FEATURES.filter(feature =>
    feature?.identity.includes("Priest")
  )
  const SCOUNDREL_FEATURES = IDENTITY_FEATURES.filter(feature =>
    feature?.identity.includes("Scoundrel")
  )
  const SPELLBLADE_FEATURES = IDENTITY_FEATURES.filter(feature =>
    feature?.identity.includes("Spellblade")
  )
  const WARDEN_FEATURES = IDENTITY_FEATURES.filter(feature =>
    feature?.identity.includes("Warden")
  )
  const WARRIOR_FEATURES = IDENTITY_FEATURES.filter(feature =>
    feature?.identity.includes("Warrior")
  )
  const WILDLING_FEATURES = IDENTITY_FEATURES.filter(feature =>
    feature?.identity.includes("Wildling")
  )
  const MUTLICLASS_FEATURES = IDENTITY_FEATURES.filter(feature =>
    feature?.identity.includes("Mutliclass")
  )
  const GENERAL_FEATURES = IDENTITY_FEATURES.filter(feature =>
    feature?.identity.includes("General")
  )
  const ARMOR_FEATURES = IDENTITY_FEATURES.filter(feature =>
    feature?.identity.includes("Armor")
  )
  const COMBAT_FEATURES = IDENTITY_FEATURES.filter(feature =>
    feature?.identity.includes("Combat")
  )
  const SPELLCASTING_FEATURES = IDENTITY_FEATURES.filter(feature =>
    feature?.identity.includes("Spellcasting")
  )
  const PATRON_SWORN_FEATURES = IDENTITY_FEATURES.filter(feature =>
    feature?.identity.includes("Patron-Sworn")
  )
  const ANIMAL_COMPANION_FEATURES = IDENTITY_FEATURES.filter(feature =>
    feature?.identity.includes("Animal Companion")
  )

  const deriveSection = (title, data) => {
    const searchData = data.filter(feature =>
      `${feature?.name}${feature?.description}${feature?.firstLevelSpells}${feature?.secondLevelSpells}${feature?.thirdLevelSpells}${feature?.fourthLevelSpells}${feature?.fifthLevelSpells}`
        .toLowerCase()
        .includes(searchInput.toLowerCase())
    )

    const coreActive = activeTypeFilters.includes("Core Features")
    const subclassActive = activeTypeFilters.includes("Subclass Features")
    const generalActive = activeTypeFilters.includes("General Features")

    const relevantData = searchData.filter(
      feature =>
        (coreActive && feature?.featureType === "Core") ||
        (subclassActive && feature?.featureType === "Subclass") ||
        (generalActive && feature?.featureType === "General")
    )

    if (relevantData.length > 0) {
      return (
        <>
          <h2 className="category">{title}</h2>
          <ul>
            {relevantData?.map(identityFeature => {
              // Derive identityFeature properties.
              const firstLevelSpells = identityFeature?.firstLevelSpells
              const secondLevelSpells = identityFeature?.secondLevelSpells
              const thirdLevelSpells = identityFeature?.thirdLevelSpells
              const fourthLevelSpells = identityFeature?.fourthLevelSpells
              const fifthLevelSpells = identityFeature?.fifthLevelSpells
              const description = identityFeature?.description
              const id = identityFeature?.id
              const identity = identityFeature?.identity
              const name = identityFeature?.name
              const requirementIDs = identityFeature?.requirementIDs

              // Derive requirements.
              const requirements = requirementIDs
                ?.map(
                  requirementID =>
                    find(IDENTITY_FEATURE_REQUIREMENTS, ["id", requirementID])
                      ?.name
                )
                ?.sort()

              // Derive if the details are expanded.
              const isExpanded = expandedIdentityFeatureIDs?.includes(id)
              return (
                <li key={`${id}--${identity}`}>
                  {/* NAME */}
                  {/* ============ */}
                  <header
                    className="no-background-image"
                    onKeyDown={event => {
                      // On enter, toggle expanded/expanded.
                      if (event.keyCode === 13) {
                        onCollapseToggle(
                          id,
                          expandedIdentityFeatureIDs,
                          setExpandedIdentityFeatureIDs
                        )
                      }
                    }}
                    onClick={() =>
                      onCollapseToggle(
                        id,
                        expandedIdentityFeatureIDs,
                        setExpandedIdentityFeatureIDs
                      )
                    }
                    role="button"
                    tabIndex="0"
                  >
                    <h3 id={`${identity}--${name}`}>{name}</h3>
                    <Chevron
                      className={`chevron${isExpanded ? " expanded" : ""}`}
                    />
                  </header>
                  {/* IMAGE + NAME end */}
                  {/* ============ */}

                  {isExpanded && (
                    <section className="fields column">
                      <section className="field-group">
                        <h4>Requirements</h4>
                        <p className="value">
                          {requirements?.join(", ") || "None"}
                        </p>
                      </section>

                      <section className="field-group">
                        <h4>Description</h4>
                        <p className="value">{description}</p>
                      </section>

                      {firstLevelSpells && (
                        <section className="field-group">
                          <h4>1st Level Spells</h4>
                          <p className="value">{firstLevelSpells}</p>
                        </section>
                      )}

                      {secondLevelSpells && (
                        <section className="field-group">
                          <h4>2nd Level Spells</h4>
                          <p className="value">{secondLevelSpells}</p>
                        </section>
                      )}

                      {thirdLevelSpells && (
                        <section className="field-group">
                          <h4>3rd Level Spells</h4>
                          <p className="value">{thirdLevelSpells}</p>
                        </section>
                      )}

                      {fourthLevelSpells && (
                        <section className="field-group">
                          <h4>4th Level Spells</h4>
                          <p className="value">{fourthLevelSpells}</p>
                        </section>
                      )}

                      {fifthLevelSpells && (
                        <section className="field-group">
                          <h4>5th Level Spells</h4>
                          <p className="value">{fifthLevelSpells}</p>
                        </section>
                      )}
                    </section>
                  )}
                </li>
              )
            })}
          </ul>
        </>
      )
    }
  }

  // Start with everything collapsed.
  const [expandedIdentityFeatureIDs, setExpandedIdentityFeatureIDs] = useState(
    []
  )
  // filtering.
  const [searchInput, setSearchInput] = useState("")

  const [activeFilters, setActiveFilters] = useState([
    "Arcanist",
    "Barbarian",
    "Bard",
    "Champion",
    "Inheritor",
    "Mystic",
    "Priest",
    "Scoundrel",
    "Spellblade",
    "Warden",
    "Warrior",
    "Wildling",
    "Mutliclass",
    "General",
    "Armor",
    "Combat",
    "Spellcasting",
    "Patron-Sworn",
    "Animal Companion",
    "Core Features",
    "Subclass Features",
    "General Features",
  ])
  const [activeTypeFilters, setActiveTypeFilters] = useState([
    "Core Features",
    "Subclass Features",
    "General Features",
  ])

  return (
    <Layout>
      <Seo title="Identity Features" />
      <Wrapper>
        <BackToTop />
        <h2>Identity Features</h2>
        <h3
          onClick={() =>
            onCollapseToggle(
              "filters",
              expandedIdentityFeatureIDs,
              setExpandedIdentityFeatureIDs
            )
          }
          onKeyDown={event => {
            // On enter, toggle expanded/expanded.
            if (event.keyCode === 13) {
              onCollapseToggle(
                "filters",
                expandedIdentityFeatureIDs,
                setExpandedIdentityFeatureIDs
              )
            }
          }}
          className="search-bar"
        >
          Search and Filter
        </h3>
        {expandedIdentityFeatureIDs.includes("filters") && (
          <section>
            <h4>Search</h4>
            <input
              className="filter-input"
              name="search input"
              onChange={event => setSearchInput(event.target.value)}
              value={searchInput}
              placeholder="Search for identity features..."
            />
            <h4>Feature Category</h4>
            <section className="filters">
              <button
                type="button"
                className={`filter-button ${
                  activeFilters?.includes("Arcanist") &&
                  activeFilters?.includes("Barbarian") &&
                  activeFilters?.includes("Bard") &&
                  activeFilters?.includes("Champion") &&
                  activeFilters?.includes("Inheritor") &&
                  activeFilters?.includes("Mystic") &&
                  activeFilters?.includes("Priest") &&
                  activeFilters?.includes("Scoundrel") &&
                  activeFilters?.includes("Spellblade") &&
                  activeFilters?.includes("Warden") &&
                  activeFilters?.includes("Warrior") &&
                  activeFilters?.includes("Wildling") &&
                  activeFilters?.includes("Mutliclass") &&
                  activeFilters?.includes("General") &&
                  activeFilters?.includes("Armor") &&
                  activeFilters?.includes("Combat") &&
                  activeFilters?.includes("Spellcasting") &&
                  activeFilters?.includes("Patron-Sworn") &&
                  activeFilters?.includes("Animal Companion")
                    ? "active-button"
                    : "inactive-button"
                }`}
                onClick={() =>
                  toggleAllFilters(activeFilters, setActiveFilters)
                }
              >
                All
              </button>
              <button
                type="button"
                className={`filter-button ${
                  activeFilters?.includes("Arcanist")
                    ? "active-button"
                    : "inactive-button"
                }`}
                onClick={() =>
                  onFilterToggle("Arcanist", activeFilters, setActiveFilters)
                }
              >
                Arcanist
              </button>
              <button
                type="button"
                className={`filter-button ${
                  activeFilters?.includes("Barbarian")
                    ? "active-button"
                    : "inactive-button"
                }`}
                onClick={() =>
                  onFilterToggle("Barbarian", activeFilters, setActiveFilters)
                }
              >
                Barbarian
              </button>
              <button
                type="button"
                className={`filter-button ${
                  activeFilters?.includes("Bard")
                    ? "active-button"
                    : "inactive-button"
                }`}
                onClick={() =>
                  onFilterToggle("Bard", activeFilters, setActiveFilters)
                }
              >
                Bard
              </button>
              <button
                type="button"
                className={`filter-button ${
                  activeFilters?.includes("Champion")
                    ? "active-button"
                    : "inactive-button"
                }`}
                onClick={() =>
                  onFilterToggle("Champion", activeFilters, setActiveFilters)
                }
              >
                Champion
              </button>
              <button
                type="button"
                className={`filter-button ${
                  activeFilters?.includes("Inheritor")
                    ? "active-button"
                    : "inactive-button"
                }`}
                onClick={() =>
                  onFilterToggle("Inheritor", activeFilters, setActiveFilters)
                }
              >
                Inheritor
              </button>
              <button
                type="button"
                className={`filter-button ${
                  activeFilters?.includes("Mystic")
                    ? "active-button"
                    : "inactive-button"
                }`}
                onClick={() =>
                  onFilterToggle("Mystic", activeFilters, setActiveFilters)
                }
              >
                Mystic
              </button>
              <button
                type="button"
                className={`filter-button ${
                  activeFilters?.includes("Priest")
                    ? "active-button"
                    : "inactive-button"
                }`}
                onClick={() =>
                  onFilterToggle("Priest", activeFilters, setActiveFilters)
                }
              >
                Priest
              </button>
              <button
                type="button"
                className={`filter-button ${
                  activeFilters?.includes("Scoundrel")
                    ? "active-button"
                    : "inactive-button"
                }`}
                onClick={() =>
                  onFilterToggle("Scoundrel", activeFilters, setActiveFilters)
                }
              >
                Scoundrel
              </button>
              <button
                type="button"
                className={`filter-button ${
                  activeFilters?.includes("Spellblade")
                    ? "active-button"
                    : "inactive-button"
                }`}
                onClick={() =>
                  onFilterToggle("Spellblade", activeFilters, setActiveFilters)
                }
              >
                Spellblade
              </button>
              <button
                type="button"
                className={`filter-button ${
                  activeFilters?.includes("Warden")
                    ? "active-button"
                    : "inactive-button"
                }`}
                onClick={() =>
                  onFilterToggle("Warden", activeFilters, setActiveFilters)
                }
              >
                Warden
              </button>
              <button
                type="button"
                className={`filter-button ${
                  activeFilters?.includes("Warrior")
                    ? "active-button"
                    : "inactive-button"
                }`}
                onClick={() =>
                  onFilterToggle("Warrior", activeFilters, setActiveFilters)
                }
              >
                Warrior
              </button>
              <button
                type="button"
                className={`filter-button ${
                  activeFilters?.includes("Wildling")
                    ? "active-button"
                    : "inactive-button"
                }`}
                onClick={() =>
                  onFilterToggle("Wildling", activeFilters, setActiveFilters)
                }
              >
                Wildling
              </button>
              <button
                type="button"
                className={`filter-button ${
                  activeFilters?.includes("Mutliclass")
                    ? "active-button"
                    : "inactive-button"
                }`}
                onClick={() =>
                  onFilterToggle("Mutliclass", activeFilters, setActiveFilters)
                }
              >
                Mutliclass
              </button>
              <button
                type="button"
                className={`filter-button ${
                  activeFilters?.includes("General")
                    ? "active-button"
                    : "inactive-button"
                }`}
                onClick={() =>
                  onFilterToggle("General", activeFilters, setActiveFilters)
                }
              >
                General
              </button>
              <button
                type="button"
                className={`filter-button ${
                  activeFilters?.includes("Armor")
                    ? "active-button"
                    : "inactive-button"
                }`}
                onClick={() =>
                  onFilterToggle("Armor", activeFilters, setActiveFilters)
                }
              >
                Armor
              </button>
              <button
                type="button"
                className={`filter-button ${
                  activeFilters?.includes("Combat")
                    ? "active-button"
                    : "inactive-button"
                }`}
                onClick={() =>
                  onFilterToggle("Combat", activeFilters, setActiveFilters)
                }
              >
                Combat
              </button>
              <button
                type="button"
                className={`filter-button ${
                  activeFilters?.includes("Spellcasting")
                    ? "active-button"
                    : "inactive-button"
                }`}
                onClick={() =>
                  onFilterToggle(
                    "Spellcasting",
                    activeFilters,
                    setActiveFilters
                  )
                }
              >
                Spellcasting
              </button>
              <button
                type="button"
                className={`filter-button ${
                  activeFilters?.includes("Patron-Sworn")
                    ? "active-button"
                    : "inactive-button"
                }`}
                onClick={() =>
                  onFilterToggle(
                    "Patron-Sworn",
                    activeFilters,
                    setActiveFilters
                  )
                }
              >
                Patron-Sworn
              </button>
              <button
                type="button"
                className={`filter-button ${
                  activeFilters?.includes("Animal Companion")
                    ? "active-button"
                    : "inactive-button"
                }`}
                onClick={() =>
                  onFilterToggle(
                    "Animal Companion",
                    activeFilters,
                    setActiveFilters
                  )
                }
              >
                Animal Companion
              </button>
            </section>
            <h4>Feature Type</h4>
            <section className="filters">
              <button
                type="button"
                className={`filter-button ${
                  activeTypeFilters?.includes("Core Features")
                    ? "active-button"
                    : "inactive-button"
                }`}
                onClick={() =>
                  onFilterToggle(
                    "Core Features",
                    activeTypeFilters,
                    setActiveTypeFilters
                  )
                }
              >
                Core Features
              </button>
              <button
                type="button"
                className={`filter-button ${
                  activeTypeFilters?.includes("Subclass Features")
                    ? "active-button"
                    : "inactive-button"
                }`}
                onClick={() =>
                  onFilterToggle(
                    "Subclass Features",
                    activeTypeFilters,
                    setActiveTypeFilters
                  )
                }
              >
                Subclass Features
              </button>
              <button
                type="button"
                className={`filter-button ${
                  activeTypeFilters?.includes("General Features")
                    ? "active-button"
                    : "inactive-button"
                }`}
                onClick={() =>
                  onFilterToggle(
                    "General Features",
                    activeTypeFilters,
                    setActiveTypeFilters
                  )
                }
              >
                General Features
              </button>
            </section>
          </section>
        )}
        {activeFilters?.includes("Arcanist") && (
          <>{deriveSection("Arcanist", ARCANIST_FEATURES)}</>
        )}
        {activeFilters?.includes("Barbarian") && (
          <>{deriveSection("Barbarian", BARBARIAN_FEATURES)}</>
        )}
        {activeFilters?.includes("Bard") && (
          <>{deriveSection("Bard", BARD_FEATURES)}</>
        )}
        {activeFilters?.includes("Champion") && (
          <>{deriveSection("Champion", CHAMPION_FEATURES)}</>
        )}
        {activeFilters?.includes("Inheritor") && (
          <>{deriveSection("Inheritor", INHERITOR_FEATURES)}</>
        )}
        {activeFilters?.includes("Mystic") && (
          <>{deriveSection("Mystic", MYSTIC_FEATURES)}</>
        )}
        {activeFilters?.includes("Priest") && (
          <>{deriveSection("Priest", PRIEST_FEATURES)}</>
        )}
        {activeFilters?.includes("Scoundrel") && (
          <>{deriveSection("Scoundrel", SCOUNDREL_FEATURES)}</>
        )}
        {activeFilters?.includes("Spellblade") && (
          <>{deriveSection("Spellblade", SPELLBLADE_FEATURES)}</>
        )}
        {activeFilters?.includes("Warden") && (
          <>{deriveSection("Warden", WARDEN_FEATURES)}</>
        )}
        {activeFilters?.includes("Warrior") && (
          <>{deriveSection("Warrior", WARRIOR_FEATURES)}</>
        )}
        {activeFilters?.includes("Wildling") && (
          <>{deriveSection("Wildling", WILDLING_FEATURES)}</>
        )}
        {activeFilters?.includes("Mutliclass") && (
          <>{deriveSection("Mutliclass", MUTLICLASS_FEATURES)}</>
        )}
        {activeFilters?.includes("General") && (
          <>{deriveSection("General", GENERAL_FEATURES)}</>
        )}
        {activeFilters?.includes("Armor") && (
          <>{deriveSection("Armor", ARMOR_FEATURES)}</>
        )}
        {activeFilters?.includes("Combat") && (
          <>{deriveSection("Combat", COMBAT_FEATURES)}</>
        )}
        {activeFilters?.includes("Spellcasting") && (
          <>{deriveSection("Spellcasting", SPELLCASTING_FEATURES)}</>
        )}
        {activeFilters?.includes("Patron-Sworn") && (
          <>{deriveSection("Patron-Sworn", PATRON_SWORN_FEATURES)}</>
        )}
        {activeFilters?.includes("Animal Companion") && (
          <>{deriveSection("Animal Companion", ANIMAL_COMPANION_FEATURES)}</>
        )}
      </Wrapper>
    </Layout>
  )
}

export default IdentityFeaturesPage

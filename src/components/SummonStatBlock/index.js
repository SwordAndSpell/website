// Node modules.
import React, { Component } from "react"
// Relative imports.
import Chevron from "../icons/Chevron"

class SummonStatBlock extends Component {
  constructor(props) {
    super(props)
    this.state = {
      summon: this.props.data,
    }
  }

  render() {
    const { summon } = this.state

    return (
      <>
        <header
          className="no-background-image"
          onKeyDown={event => {
            // On enter, toggle expanded/expanded.
            if (event.keyCode === 13) {
              this.props.clickHandler()
            }
          }}
          onClick={this.props.clickHandler}
          role="button"
          tabIndex="0"
        >
          <div className="header-column">
            <h3 id={summon?.name}>{summon?.name}</h3>
            {this.props.isOpen && <p className="extra-info">{summon?.type}</p>}
          </div>
          <Chevron
            className={`chevron${this.props.isOpen ? " expanded" : ""}`}
          />
        </header>
        {this.props.isOpen && (
          <section className="content">
            <section className="fields column">
              <section className="field-group row">
                <h4>Defense: </h4>
                <p className="inline-value">{summon?.defense}</p>
              </section>
              <section className="field-group row">
                <h4>Armor: </h4>
                <p className="inline-value">{summon?.armor}</p>
              </section>
              <section className="field-group row">
                <h4>Hit Points: </h4>
                <p className="inline-value">{summon?.hitPoints}</p>
              </section>
              <section className="field-group row">
                <h4>Speeds: </h4>
                <p className="inline-value">{summon?.speed}</p>
              </section>
              <section className="field-group row">
                <h4>Resistances: </h4>
                <p className="inline-value">{summon?.resistances}</p>
              </section>
              <section className="field-group row">
                <h4>Immunities: </h4>
                <p className="inline-value">{summon?.immunities}</p>
              </section>
              <section className="field-group row">
                <h4>Senses: </h4>
                <p className="inline-value">{summon?.senses}</p>
              </section>
            </section>

            <h4>Stats</h4>
            <section className="stat-bar row">
              <section className="stat-group">
                <span className="label">STR</span>
                <p className="value">{summon?.strength}</p>
              </section>
              <section className="stat-group">
                <span className="label">DEX</span>
                <p className="value">{summon?.dexterity}</p>
              </section>
              <section className="stat-group">
                <span className="label">CON</span>
                <p className="value">{summon?.constitution}</p>
              </section>
              <section className="stat-group">
                <span className="label">INT</span>
                <p className="value">{summon?.intelligence}</p>
              </section>
              <section className="stat-group">
                <span className="label">WIS</span>
                <p className="value">{summon?.wisdom}</p>
              </section>
              <section className="stat-group">
                <span className="label">CHA</span>
                <p className="value">{summon?.charisma}</p>
              </section>
            </section>

            <h4>Saves</h4>
            <section className="stat-bar row">
              <section className="stat-group">
                <span className="label">Fortitude</span>
                <p className="value">{summon?.fortitude}</p>
              </section>
              <section className="stat-group">
                <span className="label">Reflex</span>
                <p className="value">{summon?.reflex}</p>
              </section>
              <section className="stat-group">
                <span className="label">Will</span>
                <p className="value">{summon?.will}</p>
              </section>
            </section>

            <h4>Abilities</h4>
            <section>
              {summon?.abilities.map(ability => {
                return (
                  <section
                    className="field-group"
                    key={`${summon?.name}-${ability?.name}`}
                  >
                    <h4>{ability?.name}</h4>
                    <p className="value">{ability?.description}</p>
                  </section>
                )
              })}
            </section>

            <h4>Actions</h4>
            <section>
              {summon?.actions.map(action => {
                return (
                  <section
                    className="field-group"
                    key={`${summon?.name}-${action?.name}`}
                  >
                    <h4>{action?.name}</h4>
                    <p className="value">{action?.description}</p>
                  </section>
                )
              })}
            </section>
          </section>
        )}
      </>
    )
  }
}

export default SummonStatBlock

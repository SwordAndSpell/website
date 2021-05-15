// Node modules.
import React, { Component } from "react"
// Relative imports.
import Chevron from "../icons/Chevron"

class CompanionStatBlock extends Component {
  constructor(props) {
    super(props)
    this.state = {
      companion: this.props.data,
    }
  }

  render() {
    const { companion } = this.state

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
            <h3 id={companion?.name}>{companion?.name}</h3>
            {this.props.isOpen && (
              <p className="extra-info">{companion?.type}</p>
            )}
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
                <p className="inline-value">{companion?.defense}</p>
              </section>
              <section className="field-group row">
                <h4>Armor: </h4>
                <p className="inline-value">{companion?.armor}</p>
              </section>
              <section className="field-group row">
                <h4>Hit Points: </h4>
                <p className="inline-value">{companion?.hitPoints}</p>
              </section>
              <section className="field-group row">
                <h4>Speeds: </h4>
                <p className="inline-value">{companion?.speed}</p>
              </section>
              <section className="field-group row">
                <h4>Senses: </h4>
                <p className="inline-value">{companion?.senses}</p>
              </section>
            </section>

            <h4>Stats</h4>
            <section className="stat-bar row">
              <section className="stat-group">
                <span className="label">STR</span>
                <p className="value">{companion?.strength}</p>
              </section>
              <section className="stat-group">
                <span className="label">DEX</span>
                <p className="value">{companion?.dexterity}</p>
              </section>
              <section className="stat-group">
                <span className="label">CON</span>
                <p className="value">{companion?.constitution}</p>
              </section>
              <section className="stat-group">
                <span className="label">INT</span>
                <p className="value">{companion?.intelligence}</p>
              </section>
              <section className="stat-group">
                <span className="label">WIS</span>
                <p className="value">{companion?.wisdom}</p>
              </section>
              <section className="stat-group">
                <span className="label">CHA</span>
                <p className="value">{companion?.charisma}</p>
              </section>
            </section>

            <h4>Saves</h4>
            <section className="stat-bar row">
              <section className="stat-group">
                <span className="label">Fortitude</span>
                <p className="value">{companion?.fortitude}</p>
              </section>
              <section className="stat-group">
                <span className="label">Reflex</span>
                <p className="value">{companion?.reflex}</p>
              </section>
              <section className="stat-group">
                <span className="label">Will</span>
                <p className="value">{companion?.will}</p>
              </section>
            </section>

            <h4>Skills - {companion?.skillLevel} Proficiency</h4>
            <section className="field-group ">
              <p className="value-center">{companion?.skills}</p>
            </section>

            <h4>Abilities</h4>
            <section>
              {companion?.abilities.map(ability => {
                return (
                  <section
                    className="field-group"
                    key={`${companion?.name}-${ability?.name}`}
                  >
                    <h4>{ability?.name}</h4>
                    <p className="value">{ability?.description}</p>
                  </section>
                )
              })}
            </section>

            <h4>Actions</h4>
            <section>
              {companion?.actions.map(action => {
                return (
                  <section
                    className="field-group"
                    key={`${companion?.name}-${action?.name}`}
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

export default CompanionStatBlock

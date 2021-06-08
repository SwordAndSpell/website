// Node modules.
import React, { Component } from "react"
// Relative imports.
import Chevron from "../icons/Chevron"

class ShapechangeStatBlock extends Component {
  constructor(props) {
    super(props)
    this.state = {
      form: this.props.data,
    }
  }

  render() {
    const { form } = this.state

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
            <h3 id={form?.name}>{form?.name}</h3>
            {this.props.isOpen && <p className="extra-info">{form?.type}</p>}
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
                <p className="inline-value">{form?.defense}</p>
              </section>
              <section className="field-group row">
                <h4>Armor: </h4>
                <p className="inline-value">{form?.armor}</p>
              </section>
              <section className="field-group row">
                <h4>Temp HP Gained: </h4>
                <p className="inline-value">{form?.hitPoints}</p>
              </section>
              <section className="field-group row">
                <h4>Speeds: </h4>
                <p className="inline-value">{form?.speed}</p>
              </section>
              <section className="field-group row">
                <h4>Senses: </h4>
                <p className="inline-value">{form?.senses}</p>
              </section>
            </section>

            <h4>Saves</h4>
            <section className="stat-bar row">
              <section className="stat-group">
                <span className="label">Fortitude</span>
                <p className="value">{form?.fortitude}</p>
              </section>
              <section className="stat-group">
                <span className="label">Reflex</span>
                <p className="value">{form?.reflex}</p>
              </section>
              <section className="stat-group">
                <span className="label">Will</span>
                <p className="value">{form?.will}</p>
              </section>
            </section>
            <h4>Skill Bonuses</h4>
            <section>
              {form?.skills.map(skill => {
                return (
                  <section
                    className="field-group row"
                    key={`${form?.name}-${skill?.name}`}
                  >
                    <h4>{skill?.name} -</h4>
                    <p className="inline-value">{skill?.value}</p>
                  </section>
                )
              })}
            </section>
            <h4>Abilities - Choose {form?.choose}</h4>
            <section>
              {form?.abilities.map(ability => {
                return (
                  <section
                    className="field-group"
                    key={`${form?.name}-${ability?.name}`}
                  >
                    <h4>{ability?.name}</h4>
                    <p className="value">{ability?.description}</p>
                  </section>
                )
              })}
            </section>

            <h4>Actions</h4>
            <section>
              {form?.actions.map(action => {
                return (
                  <section
                    className="field-group"
                    key={`${form?.name}-${action?.name}`}
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

export default ShapechangeStatBlock

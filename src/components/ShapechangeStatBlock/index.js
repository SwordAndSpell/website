// Node modules.
import React, { Component } from "react"
// Relative imports.
import { Wrapper } from "./styles"

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
      <Wrapper>
        <h2
          className="name"
          onClick={this.props.clickHandler}
          onKeyDown={event => {
            // On enter, toggle expanded/expanded.
            if (event.keyCode === 13) {
              this.props.clickHandler()
            }
          }}
        >
          {form?.name}
        </h2>
        {this.props.isOpen && (
          <section className="body">
            <section className="type">{form?.type}</section>
            <div className="barrier" />
            <section className="vitals">
              <div className="vital-data">
                <strong>Defense: </strong>
                {form?.defense}
              </div>
              <div className="vital-data">
                <strong>Armor: </strong>
                {form?.armor}
              </div>
              <div className="vital-data">
                <strong>Temporary HP: </strong>
                {form?.hitPoints}
              </div>
              <div className="vital-data">
                <strong>Speeds: </strong>
                {form?.speed}
              </div>
            </section>
            <div className="barrier" />
            <h3 className="heading">Stats</h3>
            <section className="stats">
              <section className="stat">
                <span className="label">STR</span>
                <span className="value">{form?.strength}</span>
              </section>
              <section className="stat">
                <span className="label">DEX</span>
                <span className="value">{form?.dexterity}</span>
              </section>
              <section className="stat">
                <span className="label">CON</span>
                <span className="value">{form?.constitution}</span>
              </section>
            </section>
            <div className="barrier" />
            <section className="saves">
              <h3 className="heading">Saves</h3>
              <span>
                <strong>Fortitude:</strong> {form?.fortitude}
              </span>
              <span>
                <strong>Reflex:</strong> {form?.reflex}
              </span>
              <span>
                <strong>Will:</strong> {form?.will}
              </span>
            </section>
            <div className="barrier" />
            <section className="senses">
              <h3 className="heading">Senses</h3>
              <span>{form?.senses}</span>
            </section>
            <div className="barrier" />
            <section className="Skills">
              <h3 className="heading">Skills</h3>
              {form?.skills.map(skill => {
                return (
                  <section
                    className="skill"
                    key={`${form?.name}-${skill?.name}`}
                  >
                    <div className="skill-row">
                      <strong>{skill?.name}</strong>: {skill?.value}
                    </div>
                  </section>
                )
              })}
            </section>

            <div className="barrier" />
            <section className="abilities">
              <h3 className="heading">Abilities - Choose {form?.choose}</h3>
              {form?.abilities.map(ability => {
                return (
                  <section
                    className="ability"
                    key={`${form?.name}-${ability?.name}`}
                  >
                    <div className="ability-name">{ability?.name}</div>
                    <div className="ability-description">
                      {ability?.description}
                    </div>
                  </section>
                )
              })}
            </section>
            <div className="barrier" />
            <section className="actions">
              <h3 className="heading">Actions</h3>
              {form?.actions.map(action => {
                return (
                  <section
                    className="action"
                    key={`${form?.name}-${action?.name}`}
                  >
                    <div className="action-name">{action?.name}</div>
                    <div className="action-description">
                      {action?.description}
                    </div>
                  </section>
                )
              })}
            </section>
          </section>
        )}
      </Wrapper>
    )
  }
}

export default ShapechangeStatBlock

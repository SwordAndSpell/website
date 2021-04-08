// Node modules.
import uniq from "lodash/uniq"

export const onExpandedToggle = (id, expandedIDs, setExpandedIDs) => {
  // Collapse the ID.
  if (expandedIDs?.includes(id)) {
    setExpandedIDs(expandedIDs?.filter(expandedID => expandedID !== id))
    return
  }

  // Expand the ID.
  setExpandedIDs(uniq([...expandedIDs, id]))
}

export const onCollapseToggle = (id, collapsedIDs, setCollapsedIDs) => {
  // Expand the ID.
  if (collapsedIDs?.includes(id)) {
    setCollapsedIDs(collapsedIDs?.filter(collapsedID => collapsedID !== id))
    return
  }

  // Collapse the ID.
  setCollapsedIDs(uniq([...collapsedIDs, id]))
}

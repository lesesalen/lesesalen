import React from "react"
import styled from "styled-components"

const LiTag = styled.li`
  border-radius: 4px;
  padding: 2px 6px;
  margin-right: 5px;
  font-size: 80%;
  background-color: #007acc;
  color: white;
  list-style: none;
`

const Tags = ({ children }) =>
  children && (
    <ul style={{ marginBottom: 0, marginLeft: 0, display: "inline-flex" }}>
      {children.split(", ").map(t => (
        <LiTag key={t}>{t}</LiTag>
      ))}
    </ul>
  )

export default Tags

import axios from "axios";
import { ExternalServiceError } from "../errors";

const JIRA_BASE_URL = "https://myysports.atlassian.net";

const ROADMAP_JQL =
  'project = Icebox AND "Roadmap[Dropdown]" in ("Immediate", "Short Term", "Intermediate Term", "Long Term")&fields=summary,status,customfield_10113,customfield_10104';

export const getJiraRoadMapIssues = async () => {
  try {
    const { data } = await axios.get(
      `${JIRA_BASE_URL}/rest/api/3/search?jql=${encodeURI(ROADMAP_JQL)}`,
      {
        headers: {
          Authorization: `Basic ${process.env.JIRA_AUTH_CODE}`,
        },
      }
    );

    const issues = {
      immediate: [],
      shortTerm: [],
      mediumTerm: [],
      longTerm: [],
    };

    data.issues.forEach(({ fields, id }) => {
      const typeId = fields.customfield_10104.id;
      issues[idToTimeMapping[typeId]].push({
        id,
        summary: fields.summary,
        team: fields.customfield_10113?.value,
        status: {
          text: fields.status.name,
          color: fields.status.statusCategory.colorName,
        },
      });
    });

    return issues;
  } catch (error) {
    console.error(error);
    throw new ExternalServiceError(
      "Issue occured while fetching data from Jira"
    );
  }
};

const idToTimeMapping = {
  10308: "immediate",
  10309: "shortTerm",
  10310: "mediumTerm",
};

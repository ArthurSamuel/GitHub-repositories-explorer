import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Home from "../page/Home";
import "@testing-library/jest-dom/jest-globals";
import "@testing-library/jest-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import * as resolver from "../network/resolver";
import userEvent from "@testing-library/user-event";

const mockDataUsers = [
  {
    login: "docker",
    id: 5429470,
    node_id: "MDEyOk9yZ2FuaXphdGlvbjU0Mjk0NzA=",
    avatar_url: "https://avatars.githubusercontent.com/u/5429470?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/docker",
    html_url: "https://github.com/docker",
    followers_url: "https://api.github.com/users/docker/followers",
    following_url: "https://api.github.com/users/docker/following{/other_user}",
    gists_url: "https://api.github.com/users/docker/gists{/gist_id}",
    starred_url: "https://api.github.com/users/docker/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/docker/subscriptions",
    organizations_url: "https://api.github.com/users/docker/orgs",
    repos_url: "https://api.github.com/users/docker/repos",
    events_url: "https://api.github.com/users/docker/events{/privacy}",
    received_events_url: "https://api.github.com/users/docker/received_events",
    type: "Organization",
    user_view_type: "public",
    site_admin: false,
    score: 1,
  },
  {
    login: "dockersamples",
    id: 25759379,
    node_id: "MDEyOk9yZ2FuaXphdGlvbjI1NzU5Mzc5",
    avatar_url: "https://avatars.githubusercontent.com/u/25759379?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/dockersamples",
    html_url: "https://github.com/dockersamples",
    followers_url: "https://api.github.com/users/dockersamples/followers",
    following_url:
      "https://api.github.com/users/dockersamples/following{/other_user}",
    gists_url: "https://api.github.com/users/dockersamples/gists{/gist_id}",
    starred_url:
      "https://api.github.com/users/dockersamples/starred{/owner}{/repo}",
    subscriptions_url:
      "https://api.github.com/users/dockersamples/subscriptions",
    organizations_url: "https://api.github.com/users/dockersamples/orgs",
    repos_url: "https://api.github.com/users/dockersamples/repos",
    events_url: "https://api.github.com/users/dockersamples/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/dockersamples/received_events",
    type: "Organization",
    user_view_type: "public",
    site_admin: false,
    score: 1,
  },
  {
    login: "docker-library",
    id: 7739233,
    node_id: "MDEyOk9yZ2FuaXphdGlvbjc3MzkyMzM=",
    avatar_url: "https://avatars.githubusercontent.com/u/7739233?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/docker-library",
    html_url: "https://github.com/docker-library",
    followers_url: "https://api.github.com/users/docker-library/followers",
    following_url:
      "https://api.github.com/users/docker-library/following{/other_user}",
    gists_url: "https://api.github.com/users/docker-library/gists{/gist_id}",
    starred_url:
      "https://api.github.com/users/docker-library/starred{/owner}{/repo}",
    subscriptions_url:
      "https://api.github.com/users/docker-library/subscriptions",
    organizations_url: "https://api.github.com/users/docker-library/orgs",
    repos_url: "https://api.github.com/users/docker-library/repos",
    events_url: "https://api.github.com/users/docker-library/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/docker-library/received_events",
    type: "Organization",
    user_view_type: "public",
    site_admin: false,
    score: 1,
  },
  {
    login: "dockercore",
    id: 26687994,
    node_id: "MDQ6VXNlcjI2Njg3OTk0",
    avatar_url: "https://avatars.githubusercontent.com/u/26687994?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/dockercore",
    html_url: "https://github.com/dockercore",
    followers_url: "https://api.github.com/users/dockercore/followers",
    following_url:
      "https://api.github.com/users/dockercore/following{/other_user}",
    gists_url: "https://api.github.com/users/dockercore/gists{/gist_id}",
    starred_url:
      "https://api.github.com/users/dockercore/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/dockercore/subscriptions",
    organizations_url: "https://api.github.com/users/dockercore/orgs",
    repos_url: "https://api.github.com/users/dockercore/repos",
    events_url: "https://api.github.com/users/dockercore/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/dockercore/received_events",
    type: "User",
    user_view_type: "public",
    site_admin: false,
    score: 1,
  },
  {
    login: "docker-archive",
    id: 59890674,
    node_id: "MDEyOk9yZ2FuaXphdGlvbjU5ODkwNjc0",
    avatar_url: "https://avatars.githubusercontent.com/u/59890674?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/docker-archive",
    html_url: "https://github.com/docker-archive",
    followers_url: "https://api.github.com/users/docker-archive/followers",
    following_url:
      "https://api.github.com/users/docker-archive/following{/other_user}",
    gists_url: "https://api.github.com/users/docker-archive/gists{/gist_id}",
    starred_url:
      "https://api.github.com/users/docker-archive/starred{/owner}{/repo}",
    subscriptions_url:
      "https://api.github.com/users/docker-archive/subscriptions",
    organizations_url: "https://api.github.com/users/docker-archive/orgs",
    repos_url: "https://api.github.com/users/docker-archive/repos",
    events_url: "https://api.github.com/users/docker-archive/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/docker-archive/received_events",
    type: "Organization",
    user_view_type: "public",
    site_admin: false,
    score: 1,
  },
];

const mockDataRepositories = [
  {
    id: 917201865,
    node_id: "R_kgDONqtjyQ",
    name: "vvoland-gha-tests",
    full_name: "docker/vvoland-gha-tests",
    private: false,
    owner: {
      login: "docker",
      id: 5429470,
      node_id: "MDEyOk9yZ2FuaXphdGlvbjU0Mjk0NzA=",
      avatar_url: "https://avatars.githubusercontent.com/u/5429470?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/docker",
      html_url: "https://github.com/docker",
      followers_url: "https://api.github.com/users/docker/followers",
      following_url:
        "https://api.github.com/users/docker/following{/other_user}",
      gists_url: "https://api.github.com/users/docker/gists{/gist_id}",
      starred_url: "https://api.github.com/users/docker/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/docker/subscriptions",
      organizations_url: "https://api.github.com/users/docker/orgs",
      repos_url: "https://api.github.com/users/docker/repos",
      events_url: "https://api.github.com/users/docker/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/docker/received_events",
      type: "Organization",
      user_view_type: "public",
      site_admin: false,
    },
    html_url: "https://github.com/docker/vvoland-gha-tests",
    description: null,
    fork: false,
    url: "https://api.github.com/repos/docker/vvoland-gha-tests",
    forks_url: "https://api.github.com/repos/docker/vvoland-gha-tests/forks",
    keys_url:
      "https://api.github.com/repos/docker/vvoland-gha-tests/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/docker/vvoland-gha-tests/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/docker/vvoland-gha-tests/teams",
    hooks_url: "https://api.github.com/repos/docker/vvoland-gha-tests/hooks",
    issue_events_url:
      "https://api.github.com/repos/docker/vvoland-gha-tests/issues/events{/number}",
    events_url: "https://api.github.com/repos/docker/vvoland-gha-tests/events",
    assignees_url:
      "https://api.github.com/repos/docker/vvoland-gha-tests/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/docker/vvoland-gha-tests/branches{/branch}",
    tags_url: "https://api.github.com/repos/docker/vvoland-gha-tests/tags",
    blobs_url:
      "https://api.github.com/repos/docker/vvoland-gha-tests/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/docker/vvoland-gha-tests/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/docker/vvoland-gha-tests/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/docker/vvoland-gha-tests/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/docker/vvoland-gha-tests/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/docker/vvoland-gha-tests/languages",
    stargazers_url:
      "https://api.github.com/repos/docker/vvoland-gha-tests/stargazers",
    contributors_url:
      "https://api.github.com/repos/docker/vvoland-gha-tests/contributors",
    subscribers_url:
      "https://api.github.com/repos/docker/vvoland-gha-tests/subscribers",
    subscription_url:
      "https://api.github.com/repos/docker/vvoland-gha-tests/subscription",
    commits_url:
      "https://api.github.com/repos/docker/vvoland-gha-tests/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/docker/vvoland-gha-tests/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/docker/vvoland-gha-tests/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/docker/vvoland-gha-tests/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/docker/vvoland-gha-tests/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/docker/vvoland-gha-tests/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/docker/vvoland-gha-tests/merges",
    archive_url:
      "https://api.github.com/repos/docker/vvoland-gha-tests/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/docker/vvoland-gha-tests/downloads",
    issues_url:
      "https://api.github.com/repos/docker/vvoland-gha-tests/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/docker/vvoland-gha-tests/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/docker/vvoland-gha-tests/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/docker/vvoland-gha-tests/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/docker/vvoland-gha-tests/labels{/name}",
    releases_url:
      "https://api.github.com/repos/docker/vvoland-gha-tests/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/docker/vvoland-gha-tests/deployments",
    created_at: "2025-01-15T14:50:38Z",
    updated_at: "2025-06-04T13:41:54Z",
    pushed_at: "2025-06-04T13:41:09Z",
    git_url: "git://github.com/docker/vvoland-gha-tests.git",
    ssh_url: "git@github.com:docker/vvoland-gha-tests.git",
    clone_url: "https://github.com/docker/vvoland-gha-tests.git",
    svn_url: "https://github.com/docker/vvoland-gha-tests",
    homepage: null,
    size: 206302,
    stargazers_count: 0,
    watchers_count: 0,
    language: "Makefile",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    has_discussions: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 2,
    license: null,
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: "public",
    forks: 0,
    open_issues: 2,
    watchers: 0,
    default_branch: "master",
  },
  {
    id: 65772720,
    node_id: "MDEwOlJlcG9zaXRvcnk2NTc3MjcyMA==",
    name: "docs",
    full_name: "docker/docs",
    private: false,
    owner: {
      login: "docker",
      id: 5429470,
      node_id: "MDEyOk9yZ2FuaXphdGlvbjU0Mjk0NzA=",
      avatar_url: "https://avatars.githubusercontent.com/u/5429470?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/docker",
      html_url: "https://github.com/docker",
      followers_url: "https://api.github.com/users/docker/followers",
      following_url:
        "https://api.github.com/users/docker/following{/other_user}",
      gists_url: "https://api.github.com/users/docker/gists{/gist_id}",
      starred_url: "https://api.github.com/users/docker/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/docker/subscriptions",
      organizations_url: "https://api.github.com/users/docker/orgs",
      repos_url: "https://api.github.com/users/docker/repos",
      events_url: "https://api.github.com/users/docker/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/docker/received_events",
      type: "Organization",
      user_view_type: "public",
      site_admin: false,
    },
    html_url: "https://github.com/docker/docs",
    description: "Source repo for Docker's Documentation",
    fork: false,
    url: "https://api.github.com/repos/docker/docs",
    forks_url: "https://api.github.com/repos/docker/docs/forks",
    keys_url: "https://api.github.com/repos/docker/docs/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/docker/docs/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/docker/docs/teams",
    hooks_url: "https://api.github.com/repos/docker/docs/hooks",
    issue_events_url:
      "https://api.github.com/repos/docker/docs/issues/events{/number}",
    events_url: "https://api.github.com/repos/docker/docs/events",
    assignees_url: "https://api.github.com/repos/docker/docs/assignees{/user}",
    branches_url: "https://api.github.com/repos/docker/docs/branches{/branch}",
    tags_url: "https://api.github.com/repos/docker/docs/tags",
    blobs_url: "https://api.github.com/repos/docker/docs/git/blobs{/sha}",
    git_tags_url: "https://api.github.com/repos/docker/docs/git/tags{/sha}",
    git_refs_url: "https://api.github.com/repos/docker/docs/git/refs{/sha}",
    trees_url: "https://api.github.com/repos/docker/docs/git/trees{/sha}",
    statuses_url: "https://api.github.com/repos/docker/docs/statuses/{sha}",
    languages_url: "https://api.github.com/repos/docker/docs/languages",
    stargazers_url: "https://api.github.com/repos/docker/docs/stargazers",
    contributors_url: "https://api.github.com/repos/docker/docs/contributors",
    subscribers_url: "https://api.github.com/repos/docker/docs/subscribers",
    subscription_url: "https://api.github.com/repos/docker/docs/subscription",
    commits_url: "https://api.github.com/repos/docker/docs/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/docker/docs/git/commits{/sha}",
    comments_url: "https://api.github.com/repos/docker/docs/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/docker/docs/issues/comments{/number}",
    contents_url: "https://api.github.com/repos/docker/docs/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/docker/docs/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/docker/docs/merges",
    archive_url:
      "https://api.github.com/repos/docker/docs/{archive_format}{/ref}",
    downloads_url: "https://api.github.com/repos/docker/docs/downloads",
    issues_url: "https://api.github.com/repos/docker/docs/issues{/number}",
    pulls_url: "https://api.github.com/repos/docker/docs/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/docker/docs/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/docker/docs/notifications{?since,all,participating}",
    labels_url: "https://api.github.com/repos/docker/docs/labels{/name}",
    releases_url: "https://api.github.com/repos/docker/docs/releases{/id}",
    deployments_url: "https://api.github.com/repos/docker/docs/deployments",
    created_at: "2016-08-15T23:50:51Z",
    updated_at: "2025-06-04T13:38:15Z",
    pushed_at: "2025-06-04T13:38:29Z",
    git_url: "git://github.com/docker/docs.git",
    ssh_url: "git@github.com:docker/docs.git",
    clone_url: "https://github.com/docker/docs.git",
    svn_url: "https://github.com/docker/docs",
    homepage: "https://docs.docker.com",
    size: 718033,
    stargazers_count: 4328,
    watchers_count: 4328,
    language: "Markdown",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: false,
    has_pages: false,
    has_discussions: false,
    forks_count: 7693,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 238,
    license: {
      key: "apache-2.0",
      name: "Apache License 2.0",
      spdx_id: "Apache-2.0",
      url: "https://api.github.com/licenses/apache-2.0",
      node_id: "MDc6TGljZW5zZTI=",
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: "public",
    forks: 7693,
    open_issues: 238,
    watchers: 4328,
    default_branch: "main",
  },
  {
    id: 240215314,
    node_id: "MDEwOlJlcG9zaXRvcnkyNDAyMTUzMTQ=",
    name: "awesome-compose",
    full_name: "docker/awesome-compose",
    private: false,
    owner: {
      login: "docker",
      id: 5429470,
      node_id: "MDEyOk9yZ2FuaXphdGlvbjU0Mjk0NzA=",
      avatar_url: "https://avatars.githubusercontent.com/u/5429470?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/docker",
      html_url: "https://github.com/docker",
      followers_url: "https://api.github.com/users/docker/followers",
      following_url:
        "https://api.github.com/users/docker/following{/other_user}",
      gists_url: "https://api.github.com/users/docker/gists{/gist_id}",
      starred_url: "https://api.github.com/users/docker/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/docker/subscriptions",
      organizations_url: "https://api.github.com/users/docker/orgs",
      repos_url: "https://api.github.com/users/docker/repos",
      events_url: "https://api.github.com/users/docker/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/docker/received_events",
      type: "Organization",
      user_view_type: "public",
      site_admin: false,
    },
    html_url: "https://github.com/docker/awesome-compose",
    description: "Awesome Docker Compose samples",
    fork: false,
    url: "https://api.github.com/repos/docker/awesome-compose",
    forks_url: "https://api.github.com/repos/docker/awesome-compose/forks",
    keys_url:
      "https://api.github.com/repos/docker/awesome-compose/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/docker/awesome-compose/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/docker/awesome-compose/teams",
    hooks_url: "https://api.github.com/repos/docker/awesome-compose/hooks",
    issue_events_url:
      "https://api.github.com/repos/docker/awesome-compose/issues/events{/number}",
    events_url: "https://api.github.com/repos/docker/awesome-compose/events",
    assignees_url:
      "https://api.github.com/repos/docker/awesome-compose/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/docker/awesome-compose/branches{/branch}",
    tags_url: "https://api.github.com/repos/docker/awesome-compose/tags",
    blobs_url:
      "https://api.github.com/repos/docker/awesome-compose/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/docker/awesome-compose/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/docker/awesome-compose/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/docker/awesome-compose/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/docker/awesome-compose/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/docker/awesome-compose/languages",
    stargazers_url:
      "https://api.github.com/repos/docker/awesome-compose/stargazers",
    contributors_url:
      "https://api.github.com/repos/docker/awesome-compose/contributors",
    subscribers_url:
      "https://api.github.com/repos/docker/awesome-compose/subscribers",
    subscription_url:
      "https://api.github.com/repos/docker/awesome-compose/subscription",
    commits_url:
      "https://api.github.com/repos/docker/awesome-compose/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/docker/awesome-compose/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/docker/awesome-compose/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/docker/awesome-compose/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/docker/awesome-compose/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/docker/awesome-compose/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/docker/awesome-compose/merges",
    archive_url:
      "https://api.github.com/repos/docker/awesome-compose/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/docker/awesome-compose/downloads",
    issues_url:
      "https://api.github.com/repos/docker/awesome-compose/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/docker/awesome-compose/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/docker/awesome-compose/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/docker/awesome-compose/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/docker/awesome-compose/labels{/name}",
    releases_url:
      "https://api.github.com/repos/docker/awesome-compose/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/docker/awesome-compose/deployments",
    created_at: "2020-02-13T08:51:42Z",
    updated_at: "2025-06-04T13:22:55Z",
    pushed_at: "2025-05-16T00:31:38Z",
    git_url: "git://github.com/docker/awesome-compose.git",
    ssh_url: "git@github.com:docker/awesome-compose.git",
    clone_url: "https://github.com/docker/awesome-compose.git",
    svn_url: "https://github.com/docker/awesome-compose",
    homepage: "https://docs.docker.com/compose/",
    size: 8126,
    stargazers_count: 39418,
    watchers_count: 39418,
    language: "HTML",
    has_issues: true,
    has_projects: false,
    has_downloads: true,
    has_wiki: false,
    has_pages: false,
    has_discussions: false,
    forks_count: 7381,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 269,
    license: {
      key: "cc0-1.0",
      name: "Creative Commons Zero v1.0 Universal",
      spdx_id: "CC0-1.0",
      url: "https://api.github.com/licenses/cc0-1.0",
      node_id: "MDc6TGljZW5zZTY=",
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: true,
    topics: ["awesome", "awesome-list", "docker-compose"],
    visibility: "public",
    forks: 7381,
    open_issues: 269,
    watchers: 39418,
    default_branch: "master",
  },
];

const mockMutate = jest.fn();

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 10 * 1000,
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

jest.mock("../network/resolver");

describe("Home Page successfully found users and mock fetch repositories", () => {
  beforeEach(() => {
    (resolver.useGetUsers as jest.Mock).mockReturnValue({
      data: {
        data: {
          items: [...mockDataUsers],
        },
      },
      isLoading: false,
    });
    (resolver.useGetUserRepository as jest.Mock).mockReturnValue({
      mutate: mockMutate,
      isLoading: false,
      isError: false,
      data: {
        data: [...mockDataRepositories],
      },
    });
    render(
      <QueryClientProvider client={queryClient}>
        <Home />
      </QueryClientProvider>
    );
  });

  test("should show 5 users when search using 'docker' keywords", async () => {
    const user = userEvent.setup();
    const input = screen.getByTestId("search-input");

    await user.type(input, "docker");
    expect(input).toHaveValue("docker");

    const btn = screen.getByTestId("search-button");
    expect(btn).toBeEnabled();

    fireEvent.click(btn);

    for (const user of mockDataUsers) {
      const username = screen.getByText(user.login);
      await waitFor(() => expect(username).toBeInTheDocument());
    }
  });

  test("should show user's repository when accordion clicked", async () => {
    const user = userEvent.setup();
    const input = screen.getByTestId("search-input");

    await user.type(input, "docker");
    expect(input).toHaveValue("docker");

    const btn = screen.getByTestId("search-button");
    expect(btn).toBeEnabled();

    fireEvent.click(btn);

    const accordionComponent = screen.getByText(mockDataUsers[0].login);
    fireEvent.click(accordionComponent);

    for (const repository of mockDataRepositories) {
      const repositoryTitle = screen.getByText(repository.name);
      await waitFor(() => expect(repositoryTitle).toBeInTheDocument());

      const repositoryStar = screen.getByText(repository.stargazers_count);
      await waitFor(() => expect(repositoryStar).toBeInTheDocument());

      if (repository.description) {
        const repositoryDescription = screen.getByText(repository.description);
        await waitFor(() => expect(repositoryDescription).toBeInTheDocument());
      }
    }
  });
});

describe("Home Page successfully found users but, user doesn't have public repository", () => {
  beforeEach(() => {
    (resolver.useGetUsers as jest.Mock).mockReturnValue({
      data: {
        data: {
          items: [...mockDataUsers],
        },
      },
      isLoading: false,
    });
    (resolver.useGetUserRepository as jest.Mock).mockReturnValue({
      mutate: mockMutate,
      isLoading: false,
      isError: false,
      data: {
        data: [],
      },
    });
    render(
      <QueryClientProvider client={queryClient}>
        <Home />
      </QueryClientProvider>
    );
  });

  test("should show not found text when accordion clicked", async () => {
    const user = userEvent.setup();
    const input = screen.getByTestId("search-input");

    await user.type(input, "docker");
    expect(input).toHaveValue("docker");

    const btn = screen.getByTestId("search-button");
    expect(btn).toBeEnabled();

    fireEvent.click(btn);

    const accordionComponent = screen.getByText(mockDataUsers[0].login);
    fireEvent.click(accordionComponent);

    const notFoundText = screen.getByText(
      "User doesn't have any public repository"
    );
    expect(notFoundText).toBeInTheDocument();
  });
});

describe("Home Page doesn't found user", () => {
  beforeEach(() => {
    (resolver.useGetUsers as jest.Mock).mockReturnValue({
      data: {
        data: {
          items: [],
        },
      },
      isLoading: false,
    });
    (resolver.useGetUserRepository as jest.Mock).mockReturnValue({
      mutate: mockMutate,
      isLoading: false,
      isError: false,
      data: {
        data: [],
      },
    });
    render(
      <QueryClientProvider client={queryClient}>
        <Home />
      </QueryClientProvider>
    );
  });

  test("should show not found text when search button clicked", async () => {
    const user = userEvent.setup();
    const input = screen.getByTestId("search-input");

    await user.type(input, "docker");
    expect(input).toHaveValue("docker");

    const btn = screen.getByTestId("search-button");
    expect(btn).toBeEnabled();

    fireEvent.click(btn);

    const notFoundText = screen.getByText("Github username not found");
    expect(notFoundText).toBeInTheDocument();
  });
});

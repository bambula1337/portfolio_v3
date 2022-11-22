enum SkillTags {
  vueJS = 'vue_js',
  javascript = 'javascript',
  typescript = 'typescript'
}

interface Skill {
  id: bigint,
  name: string,
  startDate: string,
}

export { SkillTags, Skill };

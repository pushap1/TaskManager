FactoryBot.define do
  factory :task do
    name
    description
    author factory: :manager
    assignee factory: :developer
    state { 'new' }
    expired_at { '2021-01-15' }
  end
end

class TaskSerializer < ApplicationSerializer
  attributes :id, :name, :description, :state, :expired_at, :transitions
  belongs_to :author, key: :author, serializer: UserSerializer
  belongs_to :assignee, key: :assignee, serializer: UserSerializer

  def transitions
    object.state_transitions.map do |transiion|
      {
        event: transiion.event,
        from: transiion.from,
        to: transiion.to,
      }
    end
  end
end

class Api::V1::ApplicationController < Api::ApplicationController
  include AuthHelper

  RANSACK_DEFAULT_SORT = 'id ASC'.freeze

  def build_meta(collection)
    {
      count: collection.count,
      total_count: collection.total_count,
      current_page: collection.current_page,
      total_pages: collection.total_pages,
      per_page: collection.limit_value,
    }
  end

  def ransack_params
    params.to_unsafe_h.fetch(:q, { s: RANSACK_DEFAULT_SORT })
  end

  def page
    params.fetch(:page, 1)
  end

  def per_page
    per_page = params.fetch(:per_page, 10).to_i
    per_page > 100 ? 100 : per_page
  end

  def self.responder
    JsonResponder
  end
end

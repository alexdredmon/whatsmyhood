def paginate(query, page, page_size):
    total = query.count()
    query = query.offset(int(page) * int(page_size))
    query = query.limit(int(page_size))
    return query, total
